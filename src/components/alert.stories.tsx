import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Alert, AlertActions, AlertBody, AlertDescription, AlertTitle } from './alert';
import { useState } from 'react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Alert</Button>
        <Alert {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <AlertTitle>Alert Title</AlertTitle>
          <AlertDescription>This is the alert description.</AlertDescription>
          <AlertBody>
            <p>This is the body of the alert.</p>
          </AlertBody>
          <AlertActions>
            <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>OK</Button>
          </AlertActions>
        </Alert>
      </>
    );
  },
  args: {
    size: 'md',
  },
};
