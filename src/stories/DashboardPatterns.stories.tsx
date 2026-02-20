import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../components/badge';
import { Card } from '../components/card';
import { StatCard } from '../components/stat-card';
import type { ColumnDef } from '../components/table';
import { Table } from '../components/table';

const meta: Meta = {
  title: 'Patterns/Dashboard',
};

export default meta;
type Story = StoryObj;

interface Order {
  id: number;
  customer: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Processing';
  date: string;
  [key: string]: unknown;
}

const statusBadge = (status: string) => {
  const map: Record<
    string,
    { variant: 'success' | 'warning' | 'info'; label: string }
  > = {
    Completed: { variant: 'success', label: 'Completed' },
    Pending: { variant: 'warning', label: 'Pending' },
    Processing: { variant: 'info', label: 'Processing' },
  };
  const config = map[status] || { variant: 'info' as const, label: status };
  return (
    <Badge variant={config.variant} size="sm" dot>
      {config.label}
    </Badge>
  );
};

const orderColumns: ColumnDef<Order>[] = [
  {
    key: 'id',
    header: 'Order',
    sortable: true,
    render: (v) => <span style={{ fontWeight: 500 }}>#{String(v)}</span>,
  },
  { key: 'customer', header: 'Customer', sortable: true },
  {
    key: 'amount',
    header: 'Amount',
    sortable: true,
    render: (v) => (
      <span style={{ fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
        {String(v)}
      </span>
    ),
  },
  { key: 'status', header: 'Status', render: (v) => statusBadge(String(v)) },
  {
    key: 'date',
    header: 'Date',
    sortable: true,
    render: (v) => (
      <span
        style={{
          color: 'var(--cuk-color-text-muted)',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {String(v)}
      </span>
    ),
  },
];

const orderData: Order[] = Array.from({ length: 12 }, (_, i) => ({
  id: 1001 + i,
  customer: `Customer ${i + 1}`,
  amount: `$${(Math.random() * 1000 + 100).toFixed(2)}`,
  status: (i % 3 === 0
    ? 'Completed'
    : i % 3 === 1
      ? 'Pending'
      : 'Processing') as Order['status'],
  date: `2026-02-${String(i + 1).padStart(2, '0')}`,
}));

const DollarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const RefundIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

export const DashboardExample: Story = {
  render: () => (
    <div
      style={{
        fontFamily: 'var(--cuk-font-family-sans)',
        padding: 32,
        backgroundColor: 'var(--cuk-color-background-subtle)',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 'var(--cuk-font-size-2xl)',
              fontWeight: 700,
              color: 'var(--cuk-color-text-primary)',
              margin: '0 0 4px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Dashboard
          </h2>
          <p
            style={{
              fontSize: 'var(--cuk-font-size-sm)',
              color: 'var(--cuk-color-text-muted)',
              margin: 0,
            }}
          >
            Overview of your business metrics
          </p>
        </div>

        {/* StatCard Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <StatCard
            title="Total Revenue"
            value="$45,231"
            trend="up"
            trendValue="+12.5% from last month"
            icon={<DollarIcon />}
          />
          <StatCard
            title="Orders"
            value="1,234"
            trend="up"
            trendValue="+8.2% from last month"
            icon={<ShoppingCartIcon />}
          />
          <StatCard
            title="Customers"
            value="2,350"
            trend="neutral"
            trendValue="0% from last month"
            icon={<UsersIcon />}
          />
          <StatCard
            title="Refunds"
            value="$1,200"
            trend="down"
            trendValue="-3.1% from last month"
            icon={<RefundIcon />}
          />
        </div>

        {/* Table Section */}
        <Card>
          <Card.Header>
            <div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 'var(--cuk-font-size-lg)',
                  letterSpacing: '-0.01em',
                }}
              >
                Recent Orders
              </span>
              <p
                style={{
                  fontSize: 'var(--cuk-font-size-sm)',
                  color: 'var(--cuk-color-text-muted)',
                  margin: '4px 0 0',
                }}
              >
                A list of your recent orders with status
              </p>
            </div>
          </Card.Header>
          <Card.Body>
            <Table
              columns={orderColumns}
              data={orderData}
              pagination
              pageSize={5}
              filterable
              filterPlaceholder="Search orders..."
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
};
