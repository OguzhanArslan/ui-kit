import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../input';
import { Label } from '../label';
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
