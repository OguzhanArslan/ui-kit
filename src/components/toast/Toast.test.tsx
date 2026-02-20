import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ToastProvider, useToast } from './Toast';

const ToastTrigger = () => {
  const toast = useToast();
  return (
    <div>
      <button onClick={() => toast.success('Saved')}>Success</button>
      <button onClick={() => toast.error('Failed', { description: 'Try again' })}>Error</button>
      <button onClick={() => toast.info('Info', { action: { label: 'Undo', onClick: vi.fn() } })}>
        WithAction
      </button>
    </div>
  );
};

const renderWithProvider = () =>
  render(
    <ToastProvider>
      <ToastTrigger />
    </ToastProvider>,
  );

describe('Toast', () => {
  it('shows success toast when triggered', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByRole('button', { name: 'Success' }));
    expect(screen.getByText('Saved')).toBeInTheDocument();
  });

  it('shows toast with description', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByRole('button', { name: 'Error' }));
    expect(screen.getByText('Failed')).toBeInTheDocument();
    expect(screen.getByText('Try again')).toBeInTheDocument();
  });

  it('shows toast with action button', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByRole('button', { name: 'WithAction' }));
    expect(screen.getByText('Undo')).toBeInTheDocument();
  });

  it('removes toast when close button clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider();

    await user.click(screen.getByRole('button', { name: 'Success' }));
    expect(screen.getByText('Saved')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByText('Saved')).not.toBeInTheDocument();
  });

  it('auto-removes toast after duration', async () => {
    vi.useFakeTimers();
    renderWithProvider();

    await act(async () => {
      screen.getByRole('button', { name: 'Success' }).click();
    });
    expect(screen.getByText('Saved')).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.queryByText('Saved')).not.toBeInTheDocument();

    vi.useRealTimers();
  });

  it('throws when useToast is used outside provider', () => {
    const Bad = () => {
      useToast();
      return null;
    };
    expect(() => render(<Bad />)).toThrow('useToast must be used within ToastProvider');
  });
});
