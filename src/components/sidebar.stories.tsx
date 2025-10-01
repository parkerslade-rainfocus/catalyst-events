import type { Meta, StoryObj } from '@storybook/react';
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
import { Avatar } from './avatar';
import { HomeIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid';
import { Logo } from '../app/logo';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (args) => (
    <Sidebar {...args} style={{ height: '100vh' }}>
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
      <SidebarFooter>
        <Avatar src="/users/erica.jpg" />
      </SidebarFooter>
    </Sidebar>
  ),
};
