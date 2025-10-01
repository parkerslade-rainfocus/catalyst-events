import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    'aria-invalid': {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  ),
};

export const Multiple: Story = {
  ...Default,
  args: {
    multiple: true,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  ...Default,
  args: {
    'aria-invalid': true,
  },
};
