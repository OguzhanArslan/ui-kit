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

export interface ServerPaginationConfig {
  mode: 'server';
  currentPage: number;
  lastPage: number;
  total: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
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
  pagination?: boolean | ServerPaginationConfig;
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

// ─── Action Components ──────────────────────────────────

type ActionColor = 'primary' | 'danger' | 'success' | 'info' | 'warning';

const colorClassMap: Record<ActionColor, string> = {
  primary: styles.actionPrimary,
  danger: styles.actionDanger,
  success: styles.actionSuccess,
  info: styles.actionInfo,
  warning: styles.actionWarning,
};

export interface TableActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  color?: ActionColor;
}

const TableActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => (
  <div className={classNames(styles.actions, className)} {...rest}>
    {children}
  </div>
);
TableActions.displayName = 'Table.Actions';

const TableAction = React.forwardRef<HTMLButtonElement, TableActionProps>(
  ({ icon, label, color = 'primary', className, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      className={classNames(styles.actionBtn, colorClassMap[color], className)}
      aria-label={label}
      {...rest}
    >
      {icon}
    </button>
  ),
);
TableAction.displayName = 'Table.Action';

const TableActionDivider: React.FC = () => (
  <div className={styles.actionDivider} aria-hidden />
);
TableActionDivider.displayName = 'Table.ActionDivider';

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
  const isServerPagination =
    typeof pagination === 'object' && pagination?.mode === 'server';

  const resolvedPageSize = isServerPagination ? pagination.pageSize : pageSize;
  const resolvedCurrentPage = isServerPagination
    ? pagination.currentPage
    : currentPage;
  const totalPages = isServerPagination
    ? pagination.lastPage
    : pagination
      ? Math.max(1, Math.ceil(sortedData.length / resolvedPageSize))
      : 1;
  const pagedData = isServerPagination
    ? sortedData
    : pagination
      ? sortedData.slice(
          (resolvedCurrentPage - 1) * resolvedPageSize,
          resolvedCurrentPage * resolvedPageSize,
        )
      : sortedData;
  const resolvedPageSizeOptions = isServerPagination
    ? (pagination.pageSizeOptions ?? [5, 10, 20, 50])
    : pageSizeOptions;

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
              Array.from({ length: resolvedPageSize }, (_, rowIdx) => (
                <tr key={`skeleton-${rowIdx}`}>
                  {columns.map((col, colIdx) => (
                    <td key={col.key}>
                      <div
                        className={styles.skeleton}
                        style={{
                          width: colIdx === 0 ? '40%' : colIdx === columns.length - 1 ? '50%' : '70%',
                          animationDelay: `${rowIdx * 60 + colIdx * 30}ms`,
                        }}
                      />
                    </td>
                  ))}
                </tr>
              ))
            ) : pagedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className={styles.empty}>
                  <div className={styles.emptyInner}>
                    <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                    <span className={styles.emptyTitle}>{emptyText}</span>
                    <span className={styles.emptyDesc}>Arama kriterlerinizi değiştirmeyi veya filtrelerinizi temizlemeyi deneyin.</span>
                  </div>
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

        {pagination && loading && (
          <div className={styles.pagination}>
            <div className={styles.skeletonPagination}>
              <div className={styles.skeleton} style={{ width: 100, height: 14 }} />
              <div className={styles.skeleton} style={{ width: 50, height: 28, borderRadius: 'var(--cuk-radius-lg)' }} />
            </div>
            <div className={styles.skeletonPagination}>
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className={styles.skeleton} style={{ width: 30, height: 28, borderRadius: 'var(--cuk-radius-lg)', animationDelay: `${i * 80}ms` }} />
              ))}
            </div>
          </div>
        )}

        {pagination && !loading && pagedData.length > 0 && (
        <div className={styles.pagination}>
          <div className={styles.pageSizeSelect}>
            <span>Sayfa boyutu:</span>
            <select
              value={resolvedPageSize}
              onChange={(e) => {
                const newSize = Number(e.target.value);
                if (isServerPagination) {
                  pagination.onPageSizeChange?.(newSize);
                } else {
                  setPageSize(newSize);
                  setCurrentPage(1);
                }
              }}
            >
              {resolvedPageSizeOptions.map((opt) => (
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
              disabled={resolvedCurrentPage === 1}
              onClick={() => {
                if (isServerPagination) {
                  pagination.onPageChange(resolvedCurrentPage - 1);
                } else {
                  setCurrentPage((p) => p - 1);
                }
              }}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={classNames(
                  styles.pageButton,
                  page === resolvedCurrentPage && styles.active,
                )}
                onClick={() => {
                  if (isServerPagination) {
                    pagination.onPageChange(page);
                  } else {
                    setCurrentPage(page);
                  }
                }}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className={styles.pageButton}
              disabled={resolvedCurrentPage === totalPages}
              onClick={() => {
                if (isServerPagination) {
                  pagination.onPageChange(resolvedCurrentPage + 1);
                } else {
                  setCurrentPage((p) => p + 1);
                }
              }}
            >
              ›
            </button>
          </div>
        </div>
        )}
      </div>
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
    Actions: TableActions,
    Action: TableAction,
    ActionDivider: TableActionDivider,
  },
);
