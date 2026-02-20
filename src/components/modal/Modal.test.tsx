import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Modal } from './Modal';

describe('Modal', () => {
  it('renders when open is true', () => {
    render(
      <Modal open onClose={() => {}}>
        <Modal.Body>Content</Modal.Body>
      </Modal>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(
      <Modal open={false} onClose={() => {}}>
        <Modal.Body>Hidden</Modal.Body>
      </Modal>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders header with title and description', () => {
    render(
      <Modal open onClose={() => {}}>
        <Modal.Header title="Delete" description="This cannot be undone" onClose={() => {}} />
        <Modal.Body>Content</Modal.Body>
      </Modal>,
    );
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('This cannot be undone')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose}>
        <Modal.Header title="Title" onClose={onClose} />
        <Modal.Body>Content</Modal.Body>
      </Modal>,
    );

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('calls onClose when backdrop clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose}>
        <Modal.Body>Content</Modal.Body>
      </Modal>,
    );

    await user.click(screen.getByRole('dialog'));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('renders footer', () => {
    render(
      <Modal open onClose={() => {}}>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <button>Cancel</button>
        </Modal.Footer>
      </Modal>,
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('has aria-modal attribute', () => {
    render(
      <Modal open onClose={() => {}}>
        <Modal.Body>Content</Modal.Body>
      </Modal>,
    );
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
  });
});
