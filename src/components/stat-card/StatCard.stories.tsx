import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const TrendUp: Story = {
  args: { title: 'Total Revenue', value: '$45,231', trend: 'up', trendValue: '+12.5%' },
};

export const TrendDown: Story = {
  args: { title: 'Bounce Rate', value: '32.1%', trend: 'down', trendValue: '-4.3%' },
};

export const Neutral: Story = {
  args: { title: 'Active Users', value: '2,350', trend: 'neutral', trendValue: '0%' },
};

export const NoTrend: Story = {
  args: { title: 'Total Orders', value: '1,234' },
};
