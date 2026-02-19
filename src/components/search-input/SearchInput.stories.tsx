import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = { title: 'Components/SearchInput', component: SearchInput };
export default meta;
type Story = StoryObj<typeof SearchInput>;

const Controlled: React.FC = () => {
  const [val, setVal] = useState('');
  return <SearchInput value={val} onChange={setVal} placeholder="Search users..." />;
};

export const Default: Story = { render: () => <Controlled /> };
