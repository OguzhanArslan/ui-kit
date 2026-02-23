import React, { useCallback, useMemo, useState } from 'react';

import classNames from 'classnames';

import { SearchInput } from '../search-input/SearchInput';

import styles from './Table.module.scss';

// ─── Types ───────────────────────────────────────────────

export type SortDirection = 'asc' | 'desc' | null;

export interface ColumnDef<T> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
}

export interface TableProps<
  T extends Record<string, unknown>,
> extends React.HTMLAttributes<HTMLDivElement> {
  columns: ColumnDef<T>[];
  data: T[];
  loading?: boolean;
  emptyText?: string;
  filterable?: boolean;
  filterPlaceholder?: string;
  pagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  onSort?: (key: string, direction: SortDirection) => void;
  onFilter?: (value: string) => void;
}

// ─── Sort Icon ───────────────────────────────────────────

const SortIcon: React.FC<{ direction: SortDirection }> = ({ direction }) => (
  <span className={classNames(styles.sortIcon, direction && styles.active)}>
    {direction === 'asc' ? (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    ) : direction === 'desc' ? (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    ) : (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
      </svg>
    )}
  </span>
);

// ─── Compound Sub-components ─────────────────────────────

export type TableSectionProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;
export type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableCellElement>;

const TableHead = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <thead ref={ref} className={classNames(styles.head, className)} {...rest}>
      {children}
    </thead>
  ),
);
TableHead.displayName = 'Table.Head';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableSectionProps>(
  ({ className, children, ...rest }, ref) => (
    <tbody ref={ref} className={classNames(styles.body, className)} {...rest}>
      {children}
    </tbody>
  ),
);
TableBody.displayName = 'Table.Body';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...rest }, ref) => (
    <tr ref={ref} className={className} {...rest}>
      {children}
    </tr>
  ),
);
TableRow.displayName = 'Table.Row';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...rest }, ref) => (
    <td ref={ref} className={className} {...rest}>
      {children}
    </td>
  ),
);
TableCell.displayName = 'Table.Cell';

const TableHeadCell = React.forwardRef<
  HTMLTableCellElement,
  TableHeadCellProps
>(({ className, children, ...rest }, ref) => (
  <th ref={ref} className={className} {...rest}>
    {children}
  </th>
));
TableHeadCell.displayName = 'Table.HeadCell';

// ─── Main Table Component ────────────────────────────────

function TableInner<T extends Record<string, unknown>>(
  {
    columns,
    data,
    loading,
    emptyText = 'Veri bulunamadı',
    filterable,
    filterPlaceholder = 'Filtrele...',
    pagination,
    pageSize: initialPageSize = 10,
    pageSizeOptions = [5, 10, 20, 50],
    onSort,
    onFilter,
    className,
    ...rest
  }: TableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handleSort = useCallback(
    (key: string) => {
      let newDir: SortDirection;
      if (sortKey === key) {
        newDir = sortDir === 'asc' ? 'desc' : sortDir === 'desc' ? null : 'asc';
      } else {
        newDir = 'asc';
      }
      setSortKey(newDir ? key : null);
      setSortDir(newDir);
      onSort?.(key, newDir);
    },
    [sortKey, sortDir, onSort],
  );

  // Client-side filtering
  const filteredData = useMemo(() => {
    if (!filterable || !filterValue || onFilter) return data;
    const lower = filterValue.toLowerCase();
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.key] ?? '')
          .toLowerCase()
          .includes(lower),
      ),
    );
  }, [data, filterable, filterValue, columns, onFilter]);

  // Client-side sorting
  const sortedData = useMemo(() => {
    if (!sortKey || !sortDir || onSort) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal == null || bVal == null) return 0;
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [filteredData, sortKey, sortDir, onSort]);

  // Pagination
  const totalPages = pagination
    ? Math.max(1, Math.ceil(sortedData.length / pageSize))
    : 1;
  const pagedData = pagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  return (
    <div ref={ref} className={className} {...rest}>
      {filterable && (
        <div className={styles.filter}>
          <SearchInput
            value={filterValue}
            onChange={(val) => {
              setFilterValue(val);
              setCurrentPage(1);
              onFilter?.(val);
            }}
            placeholder={filterPlaceholder}
          />
        </div>
      )}

      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead className={styles.head}>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>
                  {col.sortable ? (
                    <button
                      type="button"
                      className={styles.sortButton}
                      onClick={() => handleSort(col.key)}
                      aria-sort={
                        sortKey === col.key && sortDir
                          ? sortDir === 'asc'
                            ? 'ascending'
                            : 'descending'
                          : 'none'
                      }
                    >
                      {col.header}
                      <SortIcon
                        direction={sortKey === col.key ? sortDir : null}
                      />
                    </button>
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.body}>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className={styles.loading}>
                  Loading...
                </td>
              </tr>
            ) : pagedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className={styles.empty}>
                  {emptyText}
                </td>
              </tr>
            ) : (
              pagedData.map((row, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render
                        ? col.render(row[col.key] as T[keyof T], row, i)
                        : String(row[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && !loading && pagedData.length > 0 && (
        <div className={styles.pagination}>
          <div className={styles.pageSizeSelect}>
            <span>Sayfa boyutu:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.pageButtons}>
            <button
              type="button"
              className={styles.pageButton}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={classNames(
                  styles.pageButton,
                  page === currentPage && styles.active,
                )}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className={styles.pageButton}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export const Table = Object.assign(
  React.forwardRef(TableInner) as <T extends Record<string, unknown>>(
    props: TableProps<T> & { ref?: React.Ref<HTMLDivElement> },
  ) => React.ReactElement | null,
  {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
    HeadCell: TableHeadCell,
  },
);
