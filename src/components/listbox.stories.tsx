import type { Meta, StoryObj } from '@storybook/react';
import { Listbox, ListboxOption, ListboxLabel, ListboxDescription } from './listbox';
import { getEvents } from '../data';
import { Avatar } from './avatar';

const meta: Meta<typeof Listbox> = {
  title: 'Components/Listbox',
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Default: Story = {
  loaders: [
    async () => ({
      events: await getEvents(),
    }),
  ],
  render: (args, { loaded }) => (
    <Listbox {...args}>
      {loaded.events.map((event) => (
        <ListboxOption key={event.id} value={event}>
          <Avatar src={event.thumbUrl} />
          <ListboxLabel>{event.name}</ListboxLabel>
        </ListboxOption>
      ))}
    </Listbox>
  ),
  args: {
    placeholder: 'Select an event',
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
