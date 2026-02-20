import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/internal/preview-api';

import { Button } from '@/components/button';
import {
  BarChartAltIcon,
  BuildingIcon,
  CalendarIcon,
  ChevronRightIcon,
  CreditCardIcon,
  GearIcon,
  HomeIcon,
  ShopingBagIcon,
} from '@/components/icons';
import { COLOR } from '@/foundation/colors';

import { SidebarFooter } from './footer/SidebarFooter';
import { SidebarHeader } from './header/SidebarHeader';
import { SidebarMenu } from './menu/SidebarMenu';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    isOpen: true,
    children: null,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

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

const UserAvatar = () => (
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: 'var(--cuk-radius-full)',
      background:
        'linear-gradient(135deg, var(--cuk-color-primary-400), var(--cuk-color-primary-600))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: 12,
      fontWeight: 600,
      flexShrink: 0,
    }}
  >
    OA
  </div>
);

function Render(args: React.ComponentProps<typeof Sidebar>) {
  const [{ isOpen }, updateArgs] = useArgs();

  const toggle = () => updateArgs({ isOpen: !isOpen });

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: 'var(--cuk-font-family-sans)',
      }}
    >
      <Sidebar {...args} isOpen={isOpen}>
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
          {isOpen ? (
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '8px 10px',
                border: 'none',
                background: 'none',
                borderRadius: 'var(--cuk-radius-md)',
                cursor: 'pointer',
                transition: 'background-color 150ms ease',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  'var(--cuk-color-background-muted)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <UserAvatar />
              <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 'var(--cuk-font-size-sm)',
                    fontWeight: 500,
                    color: 'var(--cuk-color-text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  Oğuzhan Arslan
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--cuk-color-text-muted)',
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  oguzhan@caripusula.com
                </div>
              </div>
              <ChevronRightIcon />
            </button>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <UserAvatar />
            </div>
          )}
        </SidebarFooter>
      </Sidebar>

      <div
        style={{
          flex: 1,
          padding: 32,
          backgroundColor: 'var(--cuk-color-background-subtle)',
          overflow: 'auto',
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <h2
            style={{
              fontSize: 'var(--cuk-font-size-2xl)',
              fontWeight: 700,
              color: 'var(--cuk-color-text-primary)',
              margin: '0 0 8px',
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
            Welcome back! Here&apos;s an overview of your workspace.
          </p>
        </div>
      </div>
    </div>
  );
}

export const Default: Story = {
  args: {
    isOpen: true,
    children: null,
  },
  render: Render,
};
