import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownSection,
  DropdownHeading,
  DropdownDivider,
  DropdownLabel,
  DropdownDescription,
  DropdownShortcut,
} from './dropdown';
import { Avatar } from './avatar';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownButton>Options</DropdownButton>
      <DropdownMenu>
        <DropdownItem>View profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithSections: Story = {
  render: (args) => (
    <Dropdown {...args}>
      <DropdownButton>Options</DropdownButton>
      <DropdownMenu>
        <DropdownSection>
          <DropdownHeader>
            <DropdownHeading>My Account</DropdownHeading>
          </DropdownHeader>
          <DropdownItem>
            <Avatar src="/users/erica.jpg" />
            <DropdownLabel>Erica</DropdownLabel>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem>View profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </DropdownSection>
        <DropdownDivider />
        <DropdownSection>
          <DropdownItem>
            <DropdownLabel>Sign out</DropdownLabel>
            <DropdownShortcut keys="⇧⌘Q" />
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
};
