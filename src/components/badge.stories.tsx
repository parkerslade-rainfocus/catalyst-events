import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeButton } from './badge';

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'zinc',
];

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colors.map((color) => (
        <Badge key={color} color={color as any}>
          {color}
        </Badge>
      ))}
    </div>
  ),
};

export const BadgeButtonAsButton: StoryObj<typeof BadgeButton> = {
  render: (args) => <BadgeButton {...args} />,
  args: {
    children: 'Clickable Badge',
    onClick: () => alert('Button clicked!'),
  },
};

export const BadgeButtonAsLink: StoryObj<typeof BadgeButton> = {
  render: (args) => <BadgeButton {...args} />,
  args: {
    children: 'Link Badge',
    href: '#',
  },
};
