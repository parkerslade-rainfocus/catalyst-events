import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from './dialog';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
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
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is the dialog description.</DialogDescription>
          <DialogBody>
            <p>This is the body of the dialog.</p>
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>OK</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    size: 'lg',
  },
};
