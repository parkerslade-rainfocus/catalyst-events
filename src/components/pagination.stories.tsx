import type { Meta, StoryObj } from '@storybook/react';
import {
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationList,
  PaginationPage,
  PaginationGap,
} from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationPrevious href="#" />
      <PaginationList>
        <PaginationPage href="#" current>
          1
        </PaginationPage>
        <PaginationPage href="#">2</PaginationPage>
        <PaginationPage href="#">3</PaginationPage>
        <PaginationGap />
        <PaginationPage href="#">8</PaginationPage>
        <PaginationPage href="#">9</PaginationPage>
        <PaginationPage href="#">10</PaginationPage>
      </PaginationList>
      <PaginationNext href="#" />
    </Pagination>
  ),
};

export const FirstPage: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationPrevious />
      <PaginationList>
        <PaginationPage href="#" current>
          1
        </PaginationPage>
        <PaginationPage href="#">2</PaginationPage>
        <PaginationPage href="#">3</PaginationPage>
        <PaginationGap />
        <PaginationPage href="#">8</PaginationPage>
        <PaginationPage href="#">9</PaginationPage>
        <PaginationPage href="#">10</PaginationPage>
      </PaginationList>
      <PaginationNext href="#" />
    </Pagination>
  ),
};

export const MiddlePage: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationPrevious href="#" />
      <PaginationList>
        <PaginationPage href="#">1</PaginationPage>
        <PaginationPage href="#">2</PaginationPage>
        <PaginationPage href="#">3</PaginationPage>
        <PaginationPage href="#" current>
          4
        </PaginationPage>
        <PaginationPage href="#">5</PaginationPage>
        <PaginationPage href="#">6</PaginationPage>
        <PaginationGap />
        <PaginationPage href="#">10</PaginationPage>
      </PaginationList>
      <PaginationNext href="#" />
    </Pagination>
  ),
};

export const LastPage: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationPrevious href="#" />
      <PaginationList>
        <PaginationPage href="#">1</PaginationPage>
        <PaginationGap />
        <PaginationPage href="#">8</PaginationPage>
        <PaginationPage href="#">9</PaginationPage>
        <PaginationPage href="#" current>
          10
        </PaginationPage>
      </PaginationList>
      <PaginationNext />
    </Pagination>
  ),
};
