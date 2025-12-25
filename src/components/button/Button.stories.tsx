import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ArrowUpIcon } from "@/components/icons";
import { SIZE } from "@/foundation/sizes";
import { TYPE } from "@/foundation/types";

import { Button } from "./Button";

const meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        type: {
            control: 'radio',
            options: [TYPE.primary, TYPE.secondary, TYPE.tertiary],
        },
        size: {
            control: 'radio',
            options: [SIZE.sm, SIZE.md, SIZE.lg],
        },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Button",
        disabled: false
    },
};

export const Secondary: Story = {
    args: {
        type: TYPE.secondary,
        label: "Button",
        disabled: false
    },
};

export const Tertiary: Story = {
    args: {
        type: TYPE.tertiary,
        label: "Button",
        disabled: false
    },
};

export const Loading: Story = {
    args: {
        label: "Button",
        disabled: false,
        isLoading: true,
    },
};

export const Icon: Story = {
    args: {
        type: TYPE.primary,
        ariaLabel: "Button",
        prefix: (<ArrowUpIcon aria-hidden="true" focusable="false" />),
        isLoading: true,
    },
};

export const IconPrefix: Story = {
    args: {
        type: TYPE.primary,
        label: "Button",
        prefix: (<ArrowUpIcon aria-hidden="true" focusable="false" />),
        disabled: false,
        isLoading: false
    },
};

export const IconSuffix: Story = {
    args: {
        type: TYPE.primary,
        label: "Button",
        suffix: (<ArrowUpIcon aria-hidden="true" focusable="false" />),
        isLoading: false
    },
};

