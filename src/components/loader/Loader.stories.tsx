import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./Loader";
import { SIZE } from "../../foundation/sizes";

const meta = {
    title: 'Components/Loader',
    component: Loader,
    argTypes: {
        size: {
            control: 'radio',
            options: [SIZE.sm, SIZE.md, SIZE.lg],
        },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoaderSmall: Story = {
    args: {
        size: SIZE.sm,
    },
};

export const LoaderMedium: Story = {
    args: {
        size: SIZE.md,
    },
};

export const LoaderLarge: Story = {
    args: {
        size: SIZE.lg,
    },
};
