import type { Meta, StoryObj } from '@storybook/react';
import { AuthLayout } from './auth-layout';
import { Text } from './text';

const meta: Meta<typeof AuthLayout> = {
  title: 'Components/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthLayout>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ width: '100%', maxWidth: '28rem', textAlign: 'center' }}>
        <Text>This is some placeholder content inside the AuthLayout.</Text>
      </div>
    ),
  },
};
