import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { ToastProvider } from './Toast';
import { useToast } from './useToast';

const meta: Meta = {
  title: 'Components/Toast',
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const AllVariants: React.FC = () => {
  const toast = useToast();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 480,
      }}
    >
      <div>
        <p
          style={{
            fontSize: 'var(--cuk-font-size-sm)',
            color: 'var(--cuk-color-text-muted)',
            margin: '0 0 12px',
            fontWeight: 500,
          }}
        >
          Basic - Title Only
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            label="Success"
            color="primary"
            size="sm"
            onClick={() => toast.success('Changes saved successfully')}
          />
          <Button
            label="Error"
            color="error"
            size="sm"
            onClick={() => toast.error('Failed to save changes')}
          />
          <Button
            label="Warning"
            color="warning"
            size="sm"
            onClick={() => toast.warning('Your session is about to expire')}
          />
          <Button
            label="Info"
            color="secondary"
            size="sm"
            onClick={() => toast.info('New version available')}
          />
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: 'var(--cuk-font-size-sm)',
            color: 'var(--cuk-color-text-muted)',
            margin: '0 0 12px',
            fontWeight: 500,
          }}
        >
          With Description
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            label="Success"
            color="secondary"
            size="sm"
            onClick={() =>
              toast.success('Payment completed', {
                description: 'Invoice #1234 has been paid successfully.',
              })
            }
          />
          <Button
            label="Error"
            color="secondary"
            size="sm"
            onClick={() =>
              toast.error('Connection lost', {
                description:
                  'Please check your internet connection and try again.',
              })
            }
          />
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: 'var(--cuk-font-size-sm)',
            color: 'var(--cuk-color-text-muted)',
            margin: '0 0 12px',
            fontWeight: 500,
          }}
        >
          With Action Button
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            label="Delete Item"
            color="secondary"
            size="sm"
            onClick={() =>
              toast.success('Item deleted', {
                description: 'The item has been moved to trash.',
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo clicked'),
                },
              })
            }
          />
          <Button
            label="Send Failed"
            color="secondary"
            size="sm"
            onClick={() =>
              toast.error('Message failed', {
                description: 'Could not deliver the message.',
                action: {
                  label: 'Retry',
                  onClick: () => console.log('Retry clicked'),
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <AllVariants />,
};
