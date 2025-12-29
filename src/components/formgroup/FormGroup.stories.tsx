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
        <Label htmlFor="inputForInput" text="Label" />
        <Input id="inputForInput" name="labelTest" />
      </>
    ),
  },
};

export const FormGroupTextarea: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="textareaForInput" text="Label" />
        <Textarea id="textareaForInput" name="labelTest" />
      </>
    ),
  },
};

export const FormGroupSelect: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="selectForInput" text="Label" />
        <Select
          id="selectForInput"
          name="labelTest"
          isError
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
