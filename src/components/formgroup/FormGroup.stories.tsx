import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../input';
import { Label } from '../label';
import { Select } from '../select';
import { Textarea } from '../textarea';
import { FormGroup } from './FormGroup';

const meta = {
  title: 'Forms & Fields/Form Group',
  component: FormGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormGroupInput: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="inputForInput">Label</Label>
        <Input name="inputForInput" />
      </>
    ),
  },
};

export const FormGroupTextarea: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="textareaForInput">Label</Label>
        <Textarea name="textareaForInput" />
      </>
    ),
  },
};

export const FormGroupSelect: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="selectForInput">Label</Label>
        <Select
          name="selectForInput"
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </>
    ),
  },
};
