import type { Meta, StoryObj } from '@storybook/react';

import { BarChart, type IBarChartRow } from './BarChart';

const mock: IBarChartRow[] = [
  {
    rank: 1,
    product_name: 'ALÇIPAN 120X250',
    product_type: 'Stoksuz',
    unit_name: 'Adet',
    total_sales: 1603373.96,
    min_price: 100,
    max_price: 220,
    order_count: 300,
    total_quantity: 8038,
  },
  {
    rank: 2,
    product_name: '60X60 KAROPAN TAKIM',
    product_type: 'Stoksuz',
    unit_name: 'Metrekare',
    total_sales: 1574146,
    min_price: 162,
    max_price: 215,
    order_count: 79,
    total_quantity: 8334.8,
  },
];

const meta: Meta<typeof BarChart> = {
  title: 'Components/Charts/BarChart',
  component: BarChart,
  args: {
    data: mock,
    height: 340,
    valueField: 'total_sales',
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const ByRevenue: Story = {};

export const ByQuantity: Story = {
  args: {
    valueField: 'total_quantity',
  },
};

export const ByOrders: Story = {
  args: { valueField: 'order_count' },
};
