import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import {
  BarChartAltIcon,
  BuildingIcon,
  CalendarIcon,
  CreditCardIcon,
  DollarIcon,
  GearIcon,
  HomeIcon,
  LogoutIcon,
  ShopingBagIcon,
  UserIcon,
  UsersIcon,
} from '@/components/icons';
import {
  Content,
  Layout,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarUser,
} from '@/components/layout';
import { StatCard } from '@/components/stat-card';
import type { ColumnDef } from '@/components/table';
import { Table } from '@/components/table';
import { COLOR } from '@/foundation/colors';

const meta = {
  title: 'Pages/Dashboard',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

// --- Sidebar helpers ---

const SectionLabel = ({ label, isOpen }: { label: string; isOpen: boolean }) =>
  isOpen ? (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        color: 'var(--cuk-color-text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        padding: '12px 10px 4px',
      }}
    >
      {label}
    </div>
  ) : (
    <div
      style={{
        height: 1,
        backgroundColor: 'var(--cuk-color-border)',
        margin: '8px 10px',
      }}
    />
  );

// --- Table data ---

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
  customer: [
    'Ahmet Yilmaz',
    'Mehmet Kaya',
    'Zeynep Demir',
    'Fatma Celik',
    'Ali Ozturk',
    'Ayse Sahin',
    'Burak Arslan',
    'Elif Koc',
    'Can Yildiz',
    'Deniz Tas',
    'Emre Acar',
    'Gizem Dogan',
  ][i],
  amount: `$${(Math.random() * 1000 + 100).toFixed(2)}`,
  status: (['Completed', 'Pending', 'Processing'] as const)[i % 3],
  date: `2026-02-${String(i + 1).padStart(2, '0')}`,
}));

// --- Render ---

function Render(args: React.ComponentProps<typeof Layout>) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Layout {...args}>
      <Sidebar isOpen={isOpen}>
        <SidebarHeader title="Cari Pusula" isOpen={isOpen} onClick={toggle} />
        <SidebarMenu collapsed={!isOpen}>
          <SectionLabel label="Main" isOpen={isOpen} />
          <Button
            prefix={<HomeIcon />}
            label="Dashboard"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isActive
            isHiddenLabel={!isOpen}
          />
          <Button
            prefix={<ShopingBagIcon />}
            label="Products"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
          />
          <Button
            prefix={<BarChartAltIcon />}
            label="Analytics"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
          />
          <Button
            prefix={<CreditCardIcon />}
            label="Transactions"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
          />

          <SectionLabel label="Manage" isOpen={isOpen} />
          <Button
            prefix={<CalendarIcon />}
            label="Calendar"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
          />
          <Button
            prefix={<BuildingIcon />}
            label="Organization"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
          />
          <Button
            prefix={<GearIcon />}
            label="Settings"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
          />
        </SidebarMenu>
        <SidebarFooter>
          <SidebarUser
            name="Oğuzhan Arslan"
            email="oguzhan@caripusula.com"
            initials="OA"
            collapsed={!isOpen}
            menuItems={[
              {
                label: 'Profil Detay',
                icon: <UserIcon />,
                onClick: () => console.log('Profil Detay'),
              },
              {
                label: 'Çıkış',
                icon: <LogoutIcon />,
                onClick: () => console.log('Çıkış'),
              },
            ]}
          />
        </SidebarFooter>
      </Sidebar>

      <Content>
        <div style={{ maxWidth: 1200 }}>
          {/* Page Header */}
          <div style={{ marginBottom: 24 }}>
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

          {/* Stat Cards */}
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
              icon={<ShopingBagIcon />}
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
              icon={<CreditCardIcon />}
            />
          </div>

          {/* Orders Table */}
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
      </Content>
    </Layout>
  );
}

export const Default: Story = {
  args: {
    children: null,
  },
  render: Render,
};
