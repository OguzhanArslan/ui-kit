import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders with dot indicator', () => {
    const { container } = render(<Badge dot>Status</Badge>);
    expect(container.querySelector('[class*="dot"]')).toBeInTheDocument();
  });

  it('renders remove button when onRemove is provided', () => {
    render(<Badge onRemove={() => {}}>Tag</Badge>);
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
  });

  it('calls onRemove when remove button clicked', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    render(<Badge onRemove={onRemove}>Tag</Badge>);

    await user.click(screen.getByRole('button', { name: 'Remove' }));
    expect(onRemove).toHaveBeenCalledOnce();
  });

  it('does not render remove button without onRemove', () => {
    render(<Badge>Simple</Badge>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
