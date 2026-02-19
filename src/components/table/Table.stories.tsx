import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from './Table';
import type { ColumnDef } from './Table';

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

const meta: Meta = {
  title: 'Components/Table',
};

export default meta;
type Story = StoryObj;

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
  render: () => <Table columns={columns} data={sampleData} pagination pageSize={5} />,
};

export const FullFeatures: Story = {
  render: () => <Table columns={columns} data={sampleData} filterable pagination pageSize={5} />,
};

export const Empty: Story = {
  render: () => <Table columns={columns} data={[]} />,
};

export const Loading: Story = {
  render: () => <Table columns={columns} data={[]} loading />,
};
