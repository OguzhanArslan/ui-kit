import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  PenIcon,
  TrashIcon,
  ActivityIcon,
  BoxsIcon,
  EyeIcon,
  PrinterIcon,
} from '../icons';

import type { ColumnDef } from './Table';
import { Table } from './Table';

// ─── Basic demo data ───────────────────────────────────

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  [key: string]: unknown;
}

const sampleData: User[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
  status: i % 2 === 0 ? 'Active' : 'Inactive',
}));

const columns: ColumnDef<User>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'status', header: 'Status' },
];

// ─── Product data with actions ─────────────────────────

interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  stock: number;
  price: string;
  [key: string]: unknown;
}

const productData: Product[] = [
  { id: 1, code: 'PRD-001', name: 'MacBook Pro 14"', category: 'Elektronik', stock: 24, price: '74.999,00 TL' },
  { id: 2, code: 'PRD-002', name: 'iPhone 15 Pro', category: 'Elektronik', stock: 156, price: '64.999,00 TL' },
  { id: 3, code: 'PRD-003', name: 'Samsung 55" OLED TV', category: 'Elektronik', stock: 8, price: '42.500,00 TL' },
  { id: 4, code: 'PRD-004', name: 'Herman Miller Aeron', category: 'Mobilya', stock: 3, price: '38.900,00 TL' },
  { id: 5, code: 'PRD-005', name: 'Sony WH-1000XM5', category: 'Aksesuar', stock: 67, price: '12.499,00 TL' },
  { id: 6, code: 'PRD-006', name: 'Dyson V15 Detect', category: 'Ev Aletleri', stock: 0, price: '24.999,00 TL' },
  { id: 7, code: 'PRD-007', name: 'iPad Air M2', category: 'Elektronik', stock: 41, price: '27.999,00 TL' },
];

const productColumns: ColumnDef<Product>[] = [
  { key: 'code', header: 'Kod', sortable: true },
  { key: 'name', header: 'Ürün Adı', sortable: true },
  { key: 'category', header: 'Kategori', sortable: true },
  {
    key: 'stock',
    header: 'Stok',
    sortable: true,
    render: (value) => {
      const stock = value as number;
      const color = stock === 0 ? 'var(--cuk-color-danger)' : stock < 10 ? 'var(--cuk-color-warning)' : 'var(--cuk-color-success)';
      return <span style={{ fontWeight: 600, color }}>{stock}</span>;
    },
  },
  { key: 'price', header: 'Fiyat', sortable: true },
  {
    key: 'id',
    header: '',
    render: () => (
      <Table.Actions>
        <Table.Action icon={<EyeIcon />} label="Detay" color="primary" />
        <Table.Action icon={<PenIcon />} label="Düzenle" color="primary" />
        <Table.Action icon={<BoxsIcon />} label="Stok Hareketleri" color="info" />
        <Table.ActionDivider />
        <Table.Action icon={<TrashIcon />} label="Sil" color="danger" />
      </Table.Actions>
    ),
  },
];

// ─── Customer data with actions ────────────────────────

interface Customer {
  id: number;
  name: string;
  company: string;
  phone: string;
  balance: string;
  balanceType: string;
  [key: string]: unknown;
}

const customerData: Customer[] = [
  { id: 1, name: 'Ahmet Yılmaz', company: 'Yılmaz Ticaret A.Ş.', phone: '0532 111 22 33', balance: '45.230,00 TL', balanceType: 'alacak' },
  { id: 2, name: 'Fatma Demir', company: 'Demir İnşaat Ltd.', phone: '0542 222 33 44', balance: '12.800,00 TL', balanceType: 'borc' },
  { id: 3, name: 'Mehmet Kaya', company: 'Kaya Gıda San.', phone: '0555 333 44 55', balance: '0,00 TL', balanceType: 'denk' },
  { id: 4, name: 'Ayşe Çelik', company: 'Çelik Otomotiv', phone: '0533 444 55 66', balance: '128.450,00 TL', balanceType: 'alacak' },
  { id: 5, name: 'Ali Şahin', company: 'Şahin Tekstil', phone: '0544 555 66 77', balance: '8.900,00 TL', balanceType: 'borc' },
  { id: 6, name: 'Zeynep Arslan', company: 'Arslan Mobilya', phone: '0532 666 77 88', balance: '67.100,00 TL', balanceType: 'alacak' },
];

const customerColumns: ColumnDef<Customer>[] = [
  { key: 'name', header: 'Müşteri', sortable: true },
  { key: 'company', header: 'Firma', sortable: true },
  { key: 'phone', header: 'Telefon' },
  {
    key: 'balance',
    header: 'Bakiye',
    sortable: true,
    render: (value, row) => {
      const type = row.balanceType as string;
      const color = type === 'alacak' ? 'var(--cuk-color-success)' : type === 'borc' ? 'var(--cuk-color-danger)' : 'var(--cuk-color-text-secondary)';
      const label = type === 'alacak' ? 'Alacak' : type === 'borc' ? 'Borç' : '';
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 600, color }}>{value as string}</span>
          {label && (
            <span style={{
              fontSize: '11px',
              fontWeight: 500,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: type === 'alacak' ? 'var(--cuk-color-success-subtle)' : 'var(--cuk-color-danger-subtle)',
              color,
            }}>
              {label}
            </span>
          )}
        </div>
      );
    },
  },
  {
    key: 'id',
    header: '',
    render: () => (
      <Table.Actions>
        <Table.Action icon={<EyeIcon />} label="Detay" color="primary" />
        <Table.Action icon={<ActivityIcon />} label="Müşteri Hareketleri" color="success" />
        <Table.Action icon={<PrinterIcon />} label="Ekstre Yazdır" color="info" />
        <Table.ActionDivider />
        <Table.Action icon={<PenIcon />} label="Düzenle" color="primary" />
        <Table.Action icon={<TrashIcon />} label="Sil" color="danger" />
      </Table.Actions>
    ),
  },
];

// ─── Meta ──────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Table',
};

export default meta;
type Story = StoryObj;

// ─── Basic stories ─────────────────────────────────────

export const Default: Story = {
  render: () => <Table columns={columns} data={sampleData.slice(0, 5)} />,
};

export const Sortable: Story = {
  render: () => <Table columns={columns} data={sampleData.slice(0, 10)} />,
};

export const Filterable: Story = {
  render: () => <Table columns={columns} data={sampleData} filterable />,
};

export const WithPagination: Story = {
  render: () => (
    <Table columns={columns} data={sampleData} pagination pageSize={5} />
  ),
};

export const FullFeatures: Story = {
  render: () => (
    <Table
      columns={columns}
      data={sampleData}
      filterable
      pagination
      pageSize={5}
    />
  ),
};

export const Empty: Story = {
  render: () => <Table columns={columns} data={[]} />,
};

export const Loading: Story = {
  render: () => <Table columns={columns} data={[]} loading pagination pageSize={5} />,
};

// ─── Action button stories ─────────────────────────────

export const ProductsWithActions: Story = {
  name: 'Ürünler — Stok & İşlemler',
  render: () => (
    <Table
      columns={productColumns}
      data={productData}
      filterable
      filterPlaceholder="Ürün ara..."
    />
  ),
};

export const CustomersWithActions: Story = {
  name: 'Müşteriler — Hareketler & İşlemler',
  render: () => (
    <Table
      columns={customerColumns}
      data={customerData}
      filterable
      filterPlaceholder="Müşteri ara..."
      pagination
      pageSize={5}
    />
  ),
};

// ─── Server-side pagination ────────────────────────────

const allServerData: User[] = Array.from({ length: 87 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
  status: i % 2 === 0 ? 'Active' : 'Inactive',
}));

function ServerSidePaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const total = allServerData.length;
  const lastPage = Math.max(1, Math.ceil(total / pageSize));
  const pageData = allServerData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <Table
      columns={columns}
      data={pageData}
      pagination={{
        mode: 'server',
        currentPage,
        lastPage,
        total,
        pageSize,
        onPageChange: (page) => setCurrentPage(page),
        onPageSizeChange: (size) => {
          setPageSize(size);
          setCurrentPage(1);
        },
      }}
    />
  );
}

export const ServerSidePagination: Story = {
  render: () => <ServerSidePaginationExample />,
};
