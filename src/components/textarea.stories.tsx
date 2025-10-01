import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    resizable: {
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
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This is a disabled textarea.',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'This is an invalid textarea.',
  },
};

export const NonResizable: Story = {
  args: {
    resizable: false,
    defaultValue: 'This textarea is not resizable.',
  },
};
