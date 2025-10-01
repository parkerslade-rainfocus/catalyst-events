import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

/**
 * The `Button` component is a versatile element for user actions.
 * It can be styled in three main variants: `solid` (default), `outline`, and `plain`.
 * It also supports a wide range of colors and can be rendered as a link (`<a>`) by providing an `href` prop.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['dark/zinc', 'light', 'dark/white', 'dark', 'white', 'zinc', 'indigo', 'cyan', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'sky', 'blue', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
      description: 'The color of the button (for solid variant).',
    },
    outline: {
      control: 'boolean',
      description: 'Renders the button with an outline style.',
    },
    plain: {
      control: 'boolean',
      description: 'Renders the button with a plain style.',
    },
    children: {
      control: 'text',
      description: 'The content of the button.',
    },
    href: {
        control: 'text',
        description: 'If provided, the button will be rendered as a link.',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * The default button is the `solid` variant. It has a solid background color.
 * The default color is `dark/zinc`.
 */
export const Solid: Story = {
  args: {
    children: 'Solid Button',
  },
};

/**
 * The `outline` variant has a transparent background with a colored border.
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    outline: true,
  },
};

/**
 * The `plain` variant has a transparent background and no border.
 */
export const Plain: Story = {
  args: {
    children: 'Plain Button',
    plain: true,
  },
};

/**
 * By providing an `href` prop, the button is rendered as an `<a>` tag.
 */
export const WithLink: Story = {
  args: {
    children: 'Link Button',
    href: '#',
  },
};

/**
 * The `color` prop can be used to change the color of the `solid` button.
 * Here are a few examples:
 */
export const SolidIndigo: Story = {
    name: "Solid (Indigo)",
    args: {
      children: 'Indigo Button',
      color: 'indigo',
    },
  };

export const SolidRed: Story = {
    name: "Solid (Red)",
    args: {
        children: 'Red Button',
        color: 'red',
    },
};

export const SolidGreen: Story = {
    name: "Solid (Green)",
    args: {
        children: 'Green Button',
        color: 'green',
    },
};