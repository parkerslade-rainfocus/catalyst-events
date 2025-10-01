import type { Meta, StoryObj } from '@storybook/react';
import { PeriodBridge } from './period-bridge';

const meta: Meta<typeof PeriodBridge> = {
  title: 'Components/PeriodBridge',
  component: PeriodBridge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PeriodBridge>;

export const Default: Story = {
  args: {},
};
