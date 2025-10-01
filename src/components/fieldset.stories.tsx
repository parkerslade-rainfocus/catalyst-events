import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset, Legend, FieldGroup, Field, Label, Description, ErrorMessage } from './fieldset';
import { Input } from './input';
import { Textarea } from './textarea';
import { Button } from './button';

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Legend>Profile</Legend>
      <Description>This information will be displayed publicly so be careful what you share.</Description>
      <FieldGroup>
        <Field>
          <Label>Name</Label>
          <Input name="name" defaultValue="Erica" />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input name="email" type="email" defaultValue="erica@example.com" />
        </Field>
        <Field>
          <Label>About</Label>
          <Textarea name="about" defaultValue="I'm a software engineer based in New York City." />
          <Description>Write a few sentences about yourself.</Description>
        </Field>
        <Field>
          <Label>Company</Label>
          <Input name="company" defaultValue="Google" />
          <ErrorMessage>This field is required.</ErrorMessage>
        </Field>
      </FieldGroup>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Button>Save</Button>
      </div>
    </Fieldset>
  ),
};
