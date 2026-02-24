import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { ListFilter } from './ListFilter';

const meta: Meta<typeof ListFilter> = {
  title: 'Components/ListFilter',
  component: ListFilter,
};

export default meta;
type Story = StoryObj<typeof ListFilter>;

const SearchOnly: React.FC = () => {
  const [search, setSearch] = useState('');
  return (
    <ListFilter
      searchValue={search}
      onSearchChange={setSearch}
      searchPlaceholder="Search..."
    />
  );
};

export const Default: Story = {
  render: () => <SearchOnly />,
};

const WithFiltersRender: React.FC = () => {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  return (
    <ListFilter
      searchValue={search}
      onSearchChange={setSearch}
      searchPlaceholder="Search users..."
      filters={[
        {
          name: 'role',
          placeholder: 'Role',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Editor', value: 'editor' },
            { label: 'Viewer', value: 'viewer' },
          ],
          value: role ?? undefined,
          onChange: setRole,
        },
        {
          name: 'status',
          placeholder: 'Status',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
          ],
          value: status ?? undefined,
          onChange: setStatus,
        },
      ]}
    />
  );
};

export const WithFilters: Story = {
  render: () => <WithFiltersRender />,
};
