import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormGroup } from '../formgroup';
import { Label } from '../label';
import { Select } from './Select';

const meta = {
  title: 'Forms & Fields/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const cityOptions = [
  { value: 'istanbul', label: 'Istanbul' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'izmir', label: 'Izmir' },
  { value: 'bursa', label: 'Bursa' },
  { value: 'antalya', label: 'Antalya' },
];

const categoryOptions = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'food', label: 'Food & Beverages' },
  { value: 'sports', label: 'Sports & Outdoors' },
];

export const Default: Story = {
  args: {
    name: 'city',
    options: cityOptions,
    placeholder: 'Select a city...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="city">City</Label>
          <Story />
        </FormGroup>
      </div>
    ),
  ],
};

export const Multi: Story = {
  args: {
    name: 'categories',
    isMulti: true,
    options: categoryOptions,
    placeholder: 'Select categories...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="categories">Categories</Label>
          <Story />
        </FormGroup>
      </div>
    ),
  ],
};

export const Searchable: Story = {
  args: {
    name: 'searchCity',
    options: cityOptions,
    placeholder: 'Type to search...',
    isSearchable: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="searchCity">Search City</Label>
          <Story />
        </FormGroup>
      </div>
    ),
  ],
};

export const Clearable: Story = {
  args: {
    name: 'clearableCity',
    options: cityOptions,
    placeholder: 'Select a city...',
    isClearable: true,
    defaultValue: { value: 'istanbul', label: 'Istanbul' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="clearableCity">City (clearable)</Label>
          <Story />
        </FormGroup>
      </div>
    ),
  ],
};

export const Error: Story = {
  args: {
    name: 'errorSelect',
    isError: true,
    options: cityOptions,
    placeholder: 'Select a city...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="errorSelect">City</Label>
          <Story />
          <span style={{ fontSize: 'var(--cuk-font-size-xs)', color: 'var(--cuk-color-danger)' }}>
            Please select a city
          </span>
        </FormGroup>
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    name: 'loadingSelect',
    isLoading: true,
    options: cityOptions,
    placeholder: 'Loading cities...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="loadingSelect">City</Label>
          <Story />
        </FormGroup>
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    name: 'disabledSelect',
    disabled: true,
    options: cityOptions,
    defaultValue: { value: 'istanbul', label: 'Istanbul' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <FormGroup>
          <Label htmlFor="disabledSelect">City</Label>
          <Story />
        </FormGroup>
      </div>
    ),
  ],
};
