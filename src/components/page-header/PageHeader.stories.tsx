import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/button';
import { PlusIcon } from '@/components/icons';
import { COLOR } from '@/foundation/colors';
import { SIZE } from '@/foundation/sizes';

import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Dashboard',
    description: 'Overview of your business metrics',
  },
};

export const WithActions: Story = {
  render: () => (
    <PageHeader
      title="Kullanıcılar"
      actions={
        <Button
          label="Kullanıcı Ekle"
          prefix={<PlusIcon />}
          color={COLOR.primary}
          size={SIZE.sm}
        />
      }
    />
  ),
};

export const FullFeatures: Story = {
  render: () => (
    <PageHeader
      title="Kullanıcılar"
      description="Sistemdeki tüm kullanıcıları yönetin"
      actions={
        <>
          <Button label="Dışa Aktar" color={COLOR.secondary} size={SIZE.sm} />
          <Button
            label="Kullanıcı Ekle"
            prefix={<PlusIcon />}
            color={COLOR.primary}
            size={SIZE.sm}
          />
        </>
      }
    />
  ),
};
