import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, ComboboxOption, ComboboxLabel, ComboboxDescription } from './combobox';
import { getEvents } from '../data';
import { Avatar } from './avatar';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  loaders: [
    async () => ({
      events: await getEvents(),
    }),
  ],
  render: (args, { loaded }) => (
    <Combobox
      {...args}
      options={loaded.events}
      displayValue={(event) => event?.name}
    >
      {(event) => (
        <ComboboxOption value={event}>
          <Avatar src={event.thumbUrl} />
          <ComboboxLabel>{event.name}</ComboboxLabel>
          <ComboboxDescription>{event.location}</ComboboxDescription>
        </ComboboxOption>
      )}
    </Combobox>
  ),
  args: {
    placeholder: 'Find an event...',
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
