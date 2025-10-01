import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxField, CheckboxGroup } from './checkbox';
import { Label, Description } from './fieldset';

const colors = [
  'dark/zinc',
  'dark/white',
  'white',
  'dark',
  'zinc',
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
];

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const WithLabel: StoryObj<typeof CheckboxField> = {
  render: (args) => (
    <CheckboxField {...args}>
      <Checkbox />
      <Label>Checkbox</Label>
    </CheckboxField>
  ),
};

export const WithLabelAndDescription: StoryObj<typeof CheckboxField> = {
  render: (args) => (
    <CheckboxField {...args}>
      <Checkbox />
      <Label>Checkbox</Label>
      <Description>This is a description for the checkbox.</Description>
    </CheckboxField>
  ),
};

export const Group: StoryObj<typeof CheckboxGroup> = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <CheckboxField>
        <Checkbox />
        <Label>Checkbox 1</Label>
      </CheckboxField>
      <CheckboxField>
        <Checkbox />
        <Label>Checkbox 2</Label>
      </CheckboxField>
      <CheckboxField>
        <Checkbox />
        <Label>Checkbox 3</Label>
      </CheckboxField>
    </CheckboxGroup>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colors.map((color) => (
        <CheckboxField key={color}>
          <Checkbox color={color as any} defaultChecked />
          <Label>{color}</Label>
        </CheckboxField>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};
