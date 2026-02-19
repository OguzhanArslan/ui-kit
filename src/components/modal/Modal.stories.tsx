import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';

const meta: Meta = {
  title: 'Components/Modal',
};

export default meta;
type Story = StoryObj;

const ModalDemo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal ({size})</button>
      <Modal open={open} onClose={() => setOpen(false)} size={size}>
        <Modal.Header title="Modal Title" onClose={() => setOpen(false)} />
        <Modal.Body>
          <p>This is the modal body content. It can contain any elements.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={() => setOpen(false)}>Confirm</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default: Story = { render: () => <ModalDemo /> };
export const Small: Story = { render: () => <ModalDemo size="sm" /> };
export const Large: Story = { render: () => <ModalDemo size="lg" /> };

const FormModalDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Form Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header title="Create New Item" onClose={() => setOpen(false)} />
        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label>
              Name
              <input type="text" placeholder="Enter name" style={{ display: 'block', width: '100%', marginTop: 4, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--cuk-color-input-border)' }} />
            </label>
            <label>
              Description
              <textarea placeholder="Enter description" style={{ display: 'block', width: '100%', marginTop: 4, padding: '8px 12px', borderRadius: 8, border: '1px solid var(--cuk-color-input-border)', minHeight: 80, resize: 'none' }} />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={() => { alert('Submitted!'); setOpen(false); }}>Submit</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const FormModal: Story = { render: () => <FormModalDemo /> };
