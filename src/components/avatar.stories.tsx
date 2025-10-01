import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarButton } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    square: {
      control: 'boolean',
    },
    initials: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/users/erica.jpg',
    alt: 'Erica',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'ES',
    alt: 'Erica',
  },
};

export const Square: Story = {
  args: {
    src: '/users/erica.jpg',
    square: true,
    alt: 'Erica',
  },
};

export const AvatarButtonAsButton: StoryObj<typeof AvatarButton> = {
  render: (args) => <AvatarButton {...args} />,
  args: {
    src: '/users/erica.jpg',
    alt: 'Erica',
    onClick: () => alert('Button clicked!'),
  },
};

export const AvatarButtonAsLink: StoryObj<typeof AvatarButton> = {
  render: (args) => <AvatarButton {...args} />,
  args: {
    src: '/users/erica.jpg',
    alt: 'Erica',
    href: '#',
  },
};
