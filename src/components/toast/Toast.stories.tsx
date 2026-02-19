import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastProvider, useToast } from './Toast';

const meta: Meta = {
  title: 'Components/Toast',
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
};

export default meta;
type Story = StoryObj;

const ToastDemo: React.FC = () => {
  const toast = useToast();
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <button onClick={() => toast.success('Operation successful!')}>Success</button>
      <button onClick={() => toast.error('Something went wrong.')}>Error</button>
      <button onClick={() => toast.warning('Please check your input.')}>Warning</button>
      <button onClick={() => toast.info('New update available.')}>Info</button>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};
