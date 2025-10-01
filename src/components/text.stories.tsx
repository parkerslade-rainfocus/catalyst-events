import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextLink, Strong, Code } from './text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default text component.',
  },
};

export const WithLink: Story = {
  render: () => (
    <Text>
      This is a text with a <TextLink href="#">link</TextLink> inside.
    </Text>
  ),
};

export const WithStrong: Story = {
  render: () => (
    <Text>
      This is a text with <Strong>strong</Strong> emphasis.
    </Text>
  ),
};

export const WithCode: Story = {
  render: () => (
    <Text>
      This is a text with some <Code>code</Code> snippet.
    </Text>
  ),
};

export const AllTogether: Story = {
  render: () => (
    <Text>
      This is a text component demonstrating <Strong>strong</Strong> emphasis, a{' '}
      <TextLink href="#">link</TextLink>, and some <Code>code</Code>.
    </Text>
  ),
};
