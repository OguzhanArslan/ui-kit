import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button label="Saving..." isLoading size="sm" />
      <Button label="Processing..." isLoading />
      <Button label="Loading..." isLoading variant="secondary" />
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 'var(--cuk-font-size-sm)',
        color: 'var(--cuk-color-text-muted)',
      }}
    >
      <Loader size="sm" />
      <span>Loading data...</span>
    </div>
  ),
};
