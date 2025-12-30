import type { Meta, StoryObj } from '@storybook/react';

import { COLOR } from '@/foundation/colors';
import { TYPOGRAPHY_VARIANT } from '@/foundation/typography-variant';
import { WEIGHT } from '@/foundation/weight';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Configuration/Typography',
  component: Typography,
  argTypes: {
    color: {
      control: 'radio',
      options: [
        COLOR.primary,
        COLOR.secondary,
        COLOR.tertiary,
        COLOR.success,
        COLOR.warning,
        COLOR.error,
      ],
    },
    variant: {
      control: 'radio',
      options: [
        TYPOGRAPHY_VARIANT.h1,
        TYPOGRAPHY_VARIANT.h2,
        TYPOGRAPHY_VARIANT.h3,
        TYPOGRAPHY_VARIANT.h4,
        TYPOGRAPHY_VARIANT.h5,
        TYPOGRAPHY_VARIANT.h6,
        TYPOGRAPHY_VARIANT.paragraph,
        TYPOGRAPHY_VARIANT.small,
        TYPOGRAPHY_VARIANT.caption,
      ],
    },
    weight: {
      control: 'radio',
      options: [WEIGHT.light, WEIGHT.regular, WEIGHT.medium, WEIGHT.bold],
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Default Paragraph Text',
    variant: 'paragraph',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="paragraph">Paragraph</Typography>
      <Typography variant="small">Small</Typography>
      <Typography variant="caption">Caption</Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography weight="light">Light Text</Typography>
      <Typography weight="regular">Regular Text</Typography>
      <Typography weight="medium">Medium Text</Typography>
      <Typography weight="bold">Bold Text</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography color="primary">Primary Text</Typography>
      <Typography color="secondary">Secondary Text</Typography>
      <Typography color="success">Success Text</Typography>
      <Typography color="warning">Warning Text</Typography>
      <Typography color="error">Error Text</Typography>
    </div>
  ),
};
