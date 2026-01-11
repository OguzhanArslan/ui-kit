// src/components/layout/Grid/Grid.stories.tsx
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';
import { GridItem } from './GridItem';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: { layout: 'padded' },
  args: {
    cols: '12',
    gap: 'lg',
  },
  argTypes: {
    cols: { control: 'text' },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    alignItems: { control: 'text' },
    justifyItems: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        height: 92,
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 650,
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
}

export const TwelveColumn: Story = {
  render: (args) => (
    <Grid {...args}>
      <GridItem span={8}>
        <Box>span=8</Box>
      </GridItem>
      <GridItem span={4}>
        <Box>span=4</Box>
      </GridItem>

      <GridItem span={12}>
        <Box>span=12</Box>
      </GridItem>

      <GridItem span={6}>
        <Box>span=6</Box>
      </GridItem>
      <GridItem span={6}>
        <Box>span=6</Box>
      </GridItem>

      <GridItem span={3}>
        <Box>span=3</Box>
      </GridItem>
      <GridItem span={3}>
        <Box>span=3</Box>
      </GridItem>
      <GridItem span={3}>
        <Box>span=3</Box>
      </GridItem>
      <GridItem span={3}>
        <Box>span=3</Box>
      </GridItem>
    </Grid>
  ),
};

export const WithAlignment: Story = {
  args: {
    alignItems: 'center',
    justifyItems: 'stretch',
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem span={4}>
        <Box>align center</Box>
      </GridItem>
      <GridItem span={4}>
        <Box>align center</Box>
      </GridItem>
      <GridItem span={4}>
        <Box>align center</Box>
      </GridItem>
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, opacity: 0.7, fontSize: 12 }}>
          gap="sm"
        </div>
        <Grid cols={12} gap="sm">
          <GridItem span={6}>
            <Box>6</Box>
          </GridItem>
          <GridItem span={6}>
            <Box>6</Box>
          </GridItem>
        </Grid>
      </div>

      <div>
        <div style={{ marginBottom: 8, opacity: 0.7, fontSize: 12 }}>
          gap="md"
        </div>
        <Grid cols={12} gap="md">
          <GridItem span={6}>
            <Box>6</Box>
          </GridItem>
          <GridItem span={6}>
            <Box>6</Box>
          </GridItem>
        </Grid>
      </div>

      <div>
        <div style={{ marginBottom: 8, opacity: 0.7, fontSize: 12 }}>
          gap="lg"
        </div>
        <Grid cols={12} gap="lg">
          <GridItem span={6}>
            <Box>6</Box>
          </GridItem>
          <GridItem span={6}>
            <Box>6</Box>
          </GridItem>
        </Grid>
      </div>
    </div>
  ),
};
