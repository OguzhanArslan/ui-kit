import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "../input";
import { Label } from "../label";
import { FormGroup } from "./FormGroup";


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

export const Default: Story = {
    args: {
        children: <><Label text="Label" /><Input /></>
    },
};