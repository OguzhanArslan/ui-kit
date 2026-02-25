import { useEffect, useMemo, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { CommandPalette, CommandPaletteTrigger } from '@/components/command-palette';
import type { CommandGroup } from '@/components/command-palette';
import {
  BarChartAltIcon,
  BuildingIcon,
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
  GearIcon,
  HomeIcon,
  LogoutIcon,
  NotificationIcon,
  PlusIcon,
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
  SidebarSectionLabel,
  SidebarUser,
  TopBar,
} from '@/components/layout';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { ListFilter } from '@/components/list-filter';
import { PageHeader } from '@/components/page-header';
import type { ColumnDef } from '@/components/table';
import { Table } from '@/components/table';
import { COLOR } from '@/foundation/colors';
import { SIZE } from '@/foundation/sizes';

// --- Types ---

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  [key: string]: unknown;
}

// --- Data ---

const allUsers: User[] = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Zeynep Demir',
    email: 'zeynep@example.com',
    role: 'Viewer',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Fatma Çelik',
    email: 'fatma@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Ali Öztürk',
    email: 'ali@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Ayşe Şahin',
    email: 'ayse@example.com',
    role: 'Viewer',
    status: 'Inactive',
  },
  {
    id: 7,
    name: 'Burak Arslan',
    email: 'burak@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 8,
    name: 'Elif Koç',
    email: 'elif@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 9,
    name: 'Can Yıldız',
    email: 'can@example.com',
    role: 'Viewer',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Deniz Taş',
    email: 'deniz@example.com',
    role: 'Admin',
    status: 'Inactive',
  },
  {
    id: 11,
    name: 'Emre Acar',
    email: 'emre@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 12,
    name: 'Gizem Doğan',
    email: 'gizem@example.com',
    role: 'Viewer',
    status: 'Active',
  },
  {
    id: 13,
    name: 'Hakan Çetin',
    email: 'hakan@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 14,
    name: 'İrem Yıldırım',
    email: 'irem@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
  {
    id: 15,
    name: 'Kemal Aydın',
    email: 'kemal@example.com',
    role: 'Viewer',
    status: 'Active',
  },
];

// --- Helpers ---

const roleBadge = (role: string) => {
  const map: Record<
    string,
    { variant: 'info' | 'warning' | 'default'; label: string }
  > = {
    Admin: { variant: 'info', label: 'Admin' },
    Editor: { variant: 'warning', label: 'Editor' },
    Viewer: { variant: 'default', label: 'Viewer' },
  };
  const config = map[role] || { variant: 'default' as const, label: role };
  return (
    <Badge variant={config.variant} size="sm">
      {config.label}
    </Badge>
  );
};

const statusBadge = (status: string) => {
  const variant = status === 'Active' ? 'success' : 'danger';
  return (
    <Badge variant={variant} size="sm" dot>
      {status}
    </Badge>
  );
};

const columns: ColumnDef<User>[] = [
  {
    key: 'id',
    header: 'ID',
    sortable: true,
    render: (v) => (
      <span style={{ fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
        #{String(v)}
      </span>
    ),
  },
  { key: 'name', header: 'Ad Soyad', sortable: true },
  {
    key: 'email',
    header: 'E-posta',
    render: (v) => (
      <span style={{ color: 'var(--cuk-color-text-muted)' }}>{String(v)}</span>
    ),
  },
  { key: 'role', header: 'Rol', render: (v) => roleBadge(String(v)) },
  { key: 'status', header: 'Durum', render: (v) => statusBadge(String(v)) },
];

// --- Story Meta ---

const meta = {
  title: 'Pages/UsersList',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Render ---

const languageOptions = [
  { code: 'TR', label: 'Turkce' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
];

const commandGroups: CommandGroup[] = [
  {
    label: 'Son Ziyaret Edilenler',
    items: [
      { id: 'recent-users', label: 'Kullanicilar', icon: <ClockIcon />, category: 'Yonetim' },
      { id: 'recent-home', label: 'Ana Sayfa', icon: <ClockIcon />, category: 'Genel' },
    ],
  },
  {
    label: 'Genel',
    items: [
      { id: 'home', label: 'Ana Sayfa', icon: <HomeIcon /> },
      { id: 'dashboard', label: 'Dashboard', icon: <BarChartAltIcon /> },
      { id: 'notifications', label: 'Bildirimler', icon: <NotificationIcon /> },
      { id: 'settings', label: 'Ayarlar', icon: <GearIcon /> },
    ],
  },
  {
    label: 'Yonetim',
    items: [
      { id: 'users', label: 'Kullanicilar', icon: <UsersIcon /> },
      { id: 'products', label: 'Urunler', icon: <ShopingBagIcon /> },
      { id: 'transactions', label: 'Islemler', icon: <CreditCardIcon /> },
      { id: 'calendar', label: 'Takvim', icon: <CalendarIcon /> },
      { id: 'organization', label: 'Organizasyon', icon: <BuildingIcon /> },
    ],
  },
];

function Render(args: React.ComponentProps<typeof Layout>) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [language, setLanguage] = useState('TR');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Filter state
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Pagination state (server-side simulation)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Filter data
  const filtered = useMemo(() => {
    return allUsers.filter((u) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !u.name.toLowerCase().includes(q) &&
          !u.email.toLowerCase().includes(q)
        )
          return false;
      }
      if (roleFilter && u.role.toLowerCase() !== roleFilter) return false;
      if (statusFilter && u.status.toLowerCase() !== statusFilter) return false;
      return true;
    });
  }, [search, roleFilter, statusFilter]);

  // Paginate (simulated server-side)
  const total = filtered.length;
  const lastPage = Math.max(1, Math.ceil(total / pageSize));
  const pageData = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <Layout {...args}>
      <Sidebar isOpen={isOpen}>
        <SidebarHeader title="Cari Pusula" isOpen={isOpen} onClick={toggle} />
        <SidebarMenu collapsed={!isOpen}>
          <SidebarSectionLabel label="Main" isOpen={isOpen} />
          <Button
            prefix={<HomeIcon />}
            label="Dashboard"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
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

          <SidebarSectionLabel label="Manage" isOpen={isOpen} />
          <Button
            prefix={<UsersIcon />}
            label="Users"
            color={COLOR.menu}
            isFullWidth={isOpen}
            isCircle={!isOpen}
            isHiddenLabel={!isOpen}
            isActive
          />
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
        <TopBar>
          <CommandPaletteTrigger onClick={() => setPaletteOpen(true)} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <LanguageSwitcher
              languages={languageOptions}
              value={language}
              onChange={setLanguage}
            />
            <ThemeToggle />
          </div>
        </TopBar>
        <CommandPalette
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          onSelect={(item) => {
            console.log('Selected:', item.id);
            setPaletteOpen(false);
          }}
          placeholder="Sayfa ara..."
          groups={commandGroups}
        />
        <div style={{ maxWidth: 1200 }}>
          <PageHeader
            title="Kullanıcılar"
            description="Sistemdeki tüm kullanıcıları yönetin"
            actions={
              <Button
                label="Kullanıcı Ekle"
                prefix={<PlusIcon />}
                color={COLOR.primary}
                size={SIZE.sm}
              />
            }
          />

          <Card>
            <Card.Header>
              <ListFilter
                searchValue={search}
                onSearchChange={(v) => {
                  setSearch(v);
                  setCurrentPage(1);
                }}
                searchPlaceholder="Kullanıcı ara..."
                filters={[
                  {
                    name: 'role',
                    placeholder: 'Rol',
                    options: [
                      { label: 'Admin', value: 'admin' },
                      { label: 'Editor', value: 'editor' },
                      { label: 'Viewer', value: 'viewer' },
                    ],
                    value: roleFilter ?? undefined,
                    onChange: (v) => {
                      setRoleFilter(v);
                      setCurrentPage(1);
                    },
                  },
                  {
                    name: 'status',
                    placeholder: 'Durum',
                    options: [
                      { label: 'Active', value: 'active' },
                      { label: 'Inactive', value: 'inactive' },
                    ],
                    value: statusFilter ?? undefined,
                    onChange: (v) => {
                      setStatusFilter(v);
                      setCurrentPage(1);
                    },
                  },
                ]}
              />
            </Card.Header>
            <Card.Body>
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
