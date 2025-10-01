import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputGroup } from './input';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date', 'datetime-local', 'month', 'time', 'week'],
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithStartIcon: StoryObj<typeof InputGroup> = {
  render: (args) => (
    <InputGroup>
      <MagnifyingGlassIcon data-slot="icon" />
      <Input {...args} />
    </InputGroup>
  ),
  args: {
    placeholder: 'Search...',
  },
};

export const WithEndIcon: StoryObj<typeof InputGroup> = {
  render: (args) => (
    <InputGroup>
      <Input {...args} />
      <MagnifyingGlassIcon data-slot="icon" />
    </InputGroup>
  ),
  args: {
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid',
  },
};
