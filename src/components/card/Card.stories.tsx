import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select', options: ['default', 'outlined', 'elevated'] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>Header</Card.Header>
      <Card.Body>Card body content goes here.</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  ),
  args: { variant: 'default' },
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined">
      <Card.Body>Outlined card without shadow.</Card.Body>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <Card.Body>Elevated card with stronger shadow.</Card.Body>
    </Card>
  ),
};

export const BodyOnly: Story = {
  render: () => (
    <Card>
      <Card.Body>Simple card with body only.</Card.Body>
    </Card>
  ),
};
