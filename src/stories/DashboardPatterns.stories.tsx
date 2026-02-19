import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../components/card';
import { StatCard } from '../components/stat-card';
import { Table } from '../components/table';
import type { ColumnDef } from '../components/table';

const meta: Meta = {
  title: 'Patterns/Dashboard',
};

export default meta;
type Story = StoryObj;

interface Order {
  id: number;
  customer: string;
  amount: string;
  status: string;
  date: string;
  [key: string]: unknown;
}

const orderColumns: ColumnDef<Order>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'customer', header: 'Customer', sortable: true },
  { key: 'amount', header: 'Amount', sortable: true },
  { key: 'status', header: 'Status' },
  { key: 'date', header: 'Date', sortable: true },
];

const orderData: Order[] = Array.from({ length: 12 }, (_, i) => ({
  id: 1001 + i,
  customer: `Customer ${i + 1}`,
  amount: `$${(Math.random() * 1000 + 100).toFixed(2)}`,
  status: i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'Pending' : 'Processing',
  date: `2026-02-${String(i + 1).padStart(2, '0')}`,
}));

export const DashboardExample: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--cuk-font-family-sans)', padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>Dashboard Overview</h2>

      {/* StatCard Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <StatCard title="Total Revenue" value="$45,231" trend="up" trendValue="+12.5%" />
        <StatCard title="Orders" value="1,234" trend="up" trendValue="+8.2%" />
        <StatCard title="Customers" value="2,350" trend="neutral" trendValue="0%" />
        <StatCard title="Refunds" value="$1,200" trend="down" trendValue="-3.1%" />
      </div>

      {/* Table Section */}
      <Card>
        <Card.Header>
          <span style={{ fontWeight: 600 }}>Recent Orders</span>
        </Card.Header>
        <Card.Body>
          <Table columns={orderColumns} data={orderData} pagination pageSize={5} filterable />
        </Card.Body>
      </Card>
    </div>
  ),
};
