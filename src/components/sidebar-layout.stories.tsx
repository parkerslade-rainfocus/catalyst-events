import type { Meta, StoryObj } from '@storybook/react';
import { SidebarLayout } from './sidebar-layout';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from './sidebar';
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from './navbar';
import { Avatar } from './avatar';
import { HomeIcon, MagnifyingGlassIcon, Cog8ToothIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid';
import { Logo } from '../app/logo';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Components/SidebarLayout',
  component: SidebarLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = {
  render: (args) => (
    <SidebarLayout
      {...args}
      navbar={(
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="#" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="#" aria-label="Settings">
              <Cog8ToothIcon />
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      )}
      sidebar={(
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="#" current>
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#">
                <Avatar src="/teams/catalyst.svg" />
                <SidebarLabel>Catalyst</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="#">
                <ArrowRightStartOnRectangleIcon />
                <SidebarLabel>Logout</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      )}
    >
      <div style={{ padding: '1rem' }}>
        <h1>Page Content</h1>
        <p>This is the main content of the page.</p>
      </div>
    </SidebarLayout>
  ),
};
