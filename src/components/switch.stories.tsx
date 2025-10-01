import type { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchField, SwitchGroup } from './switch';
import { Label, Description } from './fieldset';

const colors = [
  'dark/zinc',
  'dark/white',
  'dark',
  'zinc',
  'white',
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

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const WithLabel: StoryObj<typeof SwitchField> = {
  render: (args) => (
    <SwitchField {...args}>
      <Switch />
      <Label>Switch</Label>
    </SwitchField>
  ),
};

export const WithLabelAndDescription: StoryObj<typeof SwitchField> = {
  render: (args) => (
    <SwitchField {...args}>
      <Switch />
      <Label>Switch</Label>
      <Description>This is a description for the switch.</Description>
    </SwitchField>
  ),
};

export const Group: StoryObj<typeof SwitchGroup> = {
  render: (args) => (
    <SwitchGroup {...args}>
      <SwitchField>
        <Switch />
        <Label>Switch 1</Label>
      </SwitchField>
      <SwitchField>
        <Switch />
        <Label>Switch 2</Label>
      </SwitchField>
      <SwitchField>
        <Switch />
        <Label>Switch 3</Label>
      </SwitchField>
    </SwitchGroup>
  ),
  args: {
    defaultValue: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colors.map((color) => (
        <SwitchField key={color}>
          <Switch color={color as any} defaultChecked />
          <Label>{color}</Label>
        </SwitchField>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
