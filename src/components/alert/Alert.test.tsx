import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Alert } from './Alert';

describe('Alert', () => {
  it('renders with role alert', () => {
    render(<Alert>Something happened</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders title and message', () => {
    render(<Alert title="Error">Something went wrong</Alert>);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<Alert icon={<span data-testid="icon">!</span>}>Message</Alert>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders dismiss button when dismissible', () => {
    render(
      <Alert dismissible onDismiss={() => {}}>
        Message
      </Alert>,
    );
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button clicked', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Alert dismissible onDismiss={onDismiss}>
        Message
      </Alert>,
    );

    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it('does not render dismiss button when not dismissible', () => {
    render(<Alert>Message</Alert>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders action slot', () => {
    render(<Alert action={<button>Retry</button>}>Failed</Alert>);
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
  });
});
