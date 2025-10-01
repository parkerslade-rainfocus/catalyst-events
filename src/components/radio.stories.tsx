import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioField, RadioGroup } from './radio';
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

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};

export const WithLabel: StoryObj<typeof RadioField> = {
  render: (args) => (
    <RadioField {...args}>
      <Radio />
      <Label>Radio</Label>
    </RadioField>
  ),
};

export const WithLabelAndDescription: StoryObj<typeof RadioField> = {
  render: (args) => (
    <RadioField {...args}>
      <Radio />
      <Label>Radio</Label>
      <Description>This is a description for the radio button.</Description>
    </RadioField>
  ),
};

export const Group: StoryObj<typeof RadioGroup> = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioField>
        <Radio value="1" />
        <Label>Radio 1</Label>
      </RadioField>
      <RadioField>
        <Radio value="2" />
        <Label>Radio 2</Label>
      </RadioField>
      <RadioField>
        <Radio value="3" />
        <Label>Radio 3</Label>
      </RadioField>
    </RadioGroup>
  ),
  args: {
    defaultValue: '2',
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colors.map((color) => (
        <RadioField key={color}>
          <Radio color={color as any} defaultChecked />
          <Label>{color}</Label>
        </RadioField>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
