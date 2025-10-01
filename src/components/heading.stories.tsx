import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Subheading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Heading',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};

export const Subheadings: StoryObj<typeof Subheading> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Subheading level={2}>Subheading 2</Subheading>
      <Subheading level={3}>Subheading 3</Subheading>
      <Subheading level={4}>Subheading 4</Subheading>
      <Subheading level={5}>Subheading 5</Subheading>
      <Subheading level={6}>Subheading 6</Subheading>
    </div>
  ),
};
