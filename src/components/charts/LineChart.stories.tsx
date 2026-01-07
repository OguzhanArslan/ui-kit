import type { Meta, StoryObj } from '@storybook/react';

import { LineChart, type MonthlyReportRow } from './LineChart';

const mockData: MonthlyReportRow[] = [
  {
    year: 2026,
    month: 1,
    label: 'January 2026',
    month_name: 'January',
    total_orders: 13,
    total_revenue: 42950,
  },
  {
    year: 2025,
    month: 12,
    label: 'December 2025',
    month_name: 'December',
    total_orders: 187,
    total_revenue: 4229613.99,
  },
  {
    year: 2025,
    month: 11,
    label: 'November 2025',
    month_name: 'November',
    total_orders: 204,
    total_revenue: 4901646.98,
  },
  {
    year: 2025,
    month: 10,
    label: 'October 2025',
    month_name: 'October',
    total_orders: 198,
    total_revenue: 3288814.05,
  },
  {
    year: 2025,
    month: 9,
    label: 'September 2025',
    month_name: 'September',
    total_orders: 174,
    total_revenue: 1692130.24,
  },
  {
    year: 2025,
    month: 8,
    label: 'August 2025',
    month_name: 'August',
    total_orders: 178,
    total_revenue: 1818365.3,
  },
  {
    year: 2025,
    month: 7,
    label: 'July 2025',
    month_name: 'July',
    total_orders: 207,
    total_revenue: 2883877.6,
  },
  {
    year: 2025,
    month: 6,
    label: 'June 2025',
    month_name: 'June',
    total_orders: 104,
    total_revenue: 1222254.78,
  },
  {
    year: 2025,
    month: 5,
    label: 'May 2025',
    month_name: 'May',
    total_orders: 140,
    total_revenue: 1436665.67,
  },
  {
    year: 2025,
    month: 4,
    label: 'April 2025',
    month_name: 'April',
    total_orders: 87,
    total_revenue: 738970.92,
  },
  {
    year: 2025,
    month: 3,
    label: 'March 2025',
    month_name: 'March',
    total_orders: 93,
    total_revenue: 868035.1,
  },
  {
    year: 2025,
    month: 2,
    label: 'February 2025',
    month_name: 'February',
    total_orders: 96,
    total_revenue: 516605.57,
  },
];

const meta: Meta<typeof LineChart> = {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  args: {
    data: mockData,
    height: 360,
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof LineChart>;

export const Default: Story = {};

export const Compact: Story = {
  args: { height: 260 },
};

export const Large: Story = {
  args: { height: 520 },
};
