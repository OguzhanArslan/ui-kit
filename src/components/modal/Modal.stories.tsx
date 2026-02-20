import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '../button';
import { FormGroup } from '../formgroup';
import { Input } from '../input';
import { Label } from '../label';
import { Select } from '../select';
import { Textarea } from '../textarea';
import { Modal } from './Modal';

const meta: Meta = {
  title: 'Components/Modal',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const BasicDemo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label={`Open Modal (${size})`} color="secondary" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} size={size}>
        <Modal.Header
          title="Delete Project"
          description="This action cannot be undone. This will permanently delete the project and all associated data."
          onClose={() => setOpen(false)}
        />
        <Modal.Body>
          <p style={{ margin: 0 }}>
            Are you sure you want to delete <strong>Cari Pusula</strong>? All team members will lose access immediately.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button label="Cancel" color="secondary" size="sm" onClick={() => setOpen(false)} />
          <Button label="Delete" color="error" size="sm" onClick={() => setOpen(false)} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default: Story = { render: () => <BasicDemo /> };
export const Small: Story = { render: () => <BasicDemo size="sm" /> };
export const Large: Story = { render: () => <BasicDemo size="lg" /> };

const FormModalDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Create New Item" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header
          title="Create Item"
          description="Add a new item to your inventory."
          onClose={() => setOpen(false)}
        />
        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FormGroup>
              <Label htmlFor="item-name">Name</Label>
              <Input name="item-name" onChange={() => {}} placeholder="Enter item name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="item-category">Category</Label>
              <Select
                name="item-category"
                options={[
                  { value: 'electronics', label: 'Electronics' },
                  { value: 'clothing', label: 'Clothing' },
                  { value: 'furniture', label: 'Furniture' },
                ]}
                placeholder="Select a category"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="item-desc">Description</Label>
              <Textarea name="item-desc" onChange={() => {}} placeholder="Enter a description" />
            </FormGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button label="Cancel" color="tertiary" size="sm" onClick={() => setOpen(false)} />
          <Button label="Create" size="sm" onClick={() => setOpen(false)} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const FormModal: Story = { render: () => <FormModalDemo /> };

const InfoModalDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="View Details" color="secondary" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} size="sm">
        <Modal.Header title="Payment Received" onClose={() => setOpen(false)} />
        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--cuk-color-text-muted)' }}>Amount</span>
              <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>$2,450.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--cuk-color-text-muted)' }}>Date</span>
              <span>Feb 20, 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--cuk-color-text-muted)' }}>Status</span>
              <span style={{ color: 'var(--cuk-color-success-600)', fontWeight: 500 }}>Completed</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button label="Close" color="secondary" size="sm" onClick={() => setOpen(false)} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const InfoModal: Story = { render: () => <InfoModalDemo /> };
