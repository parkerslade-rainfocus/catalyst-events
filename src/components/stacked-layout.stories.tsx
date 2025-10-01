import type { Meta, StoryObj } from '@storybook/react';
import { StackedLayout } from './stacked-layout';
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from './navbar';
import { Avatar } from './avatar';
import { MagnifyingGlassIcon, Cog8ToothIcon } from '@heroicons/react/20/solid';
import { Logo } from '../app/logo';

const meta: Meta<typeof StackedLayout> = {
  title: 'Components/StackedLayout',
  component: StackedLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StackedLayout>;

export const Default: Story = {
  render: (args) => (
    <StackedLayout
      {...args}
      navbar={(
        <Navbar>
          <Logo />
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="#" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="#" aria-label="Settings">
              <Cog8ToothIcon />
            </NavbarItem>
            <NavbarItem href="#">
              <Avatar src="/users/erica.jpg" />
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      )}
    >
      <div style={{ padding: '1rem' }}>
        <h1>Page Content</h1>
        <p>This is the main content of the page.</p>
      </div>
    </StackedLayout>
  ),
};
