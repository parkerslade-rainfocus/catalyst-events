import type { Meta, StoryObj } from '@storybook/react';
import {
  Navbar,
  NavbarDivider,
  NavbarSection,
  NavbarSpacer,
  NavbarItem,
  NavbarLabel,
} from './navbar';
import { Avatar } from './avatar';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from './dropdown';
import { Cog8ToothIcon, MagnifyingGlassIcon, ShieldCheckIcon } from '@heroicons/react/20/solid';
import { Logo } from '../app/logo';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Logo />
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="#" current>
          <NavbarLabel>Home</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>Events</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>Orders</NavbarLabel>
        </NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem href="#" aria-label="Search">
          <MagnifyingGlassIcon />
        </NavbarItem>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src="/users/erica.jpg" />
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  ),
};
