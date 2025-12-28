import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "./Textarea";

const meta = {
    title: 'Forms & Fields/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'name',
    },
};

export const Error: Story = {
    args: {
        name: 'name',
        isError: true,
    },
};

export const Disabled: Story = {
    args: {
        name: 'name',
        disabled: true,
    },
};