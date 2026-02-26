import type { Meta, StoryObj } from '@storybook/react';

import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const TrendUp: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231',
    trend: 'up',
    trendValue: '+12.5%',
  },
};

export const TrendDown: Story = {
  args: {
    title: 'Bounce Rate',
    value: '32.1%',
    trend: 'down',
    trendValue: '-4.3%',
  },
};

export const Neutral: Story = {
  args: {
    title: 'Active Users',
    value: '2,350',
    trend: 'neutral',
    trendValue: '0%',
  },
};

export const NoTrend: Story = {
  args: { title: 'Total Orders', value: '1,234' },
};

export const ColorDanger: Story = {
  args: {
    title: 'Toplam Bakiye',
    value: '₺-1.615.910,87',
    trend: 'down',
    trendValue: '-8.3%',
    color: 'danger',
  },
};

export const ColorSuccess: Story = {
  args: {
    title: 'Toplam Bakiye',
    value: '₺2.450.320,00',
    trend: 'up',
    trendValue: '+12.5%',
    color: 'success',
  },
};

export const ColorWarning: Story = {
  args: {
    title: 'Bekleyen Ödemeler',
    value: '₺245.000,00',
    trend: 'neutral',
    trendValue: '3 fatura',
    color: 'warning',
  },
};

export const ColorInfo: Story = {
  args: {
    title: 'Toplam İşlem',
    value: '1,234',
    trend: 'up',
    trendValue: '+24 bu ay',
    color: 'info',
  },
};
