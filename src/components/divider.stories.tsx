import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    soft: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Soft: Story = {
  args: {
    soft: true,
  },
};
