import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = { title: 'Components/DatePicker', component: DatePicker };
export default meta;
type Story = StoryObj<typeof DatePicker>;

const Controlled: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  return <div style={{ maxWidth: 300 }}><DatePicker value={date} onChange={setDate} /></div>;
};

export const Default: Story = { render: () => <Controlled /> };
