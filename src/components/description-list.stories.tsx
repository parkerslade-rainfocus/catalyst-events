import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList, DescriptionTerm, DescriptionDetails } from './description-list';
import { getOrders } from '../data';

const meta: Meta<typeof DescriptionList> = {
  title: 'Components/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  loaders: [
    async () => ({
      order: (await getOrders())[0],
    }),
  ],
  render: (args, { loaded }) => (
    <DescriptionList {...args}>
      <DescriptionTerm>Order ID</DescriptionTerm>
      <DescriptionDetails>{loaded.order.id}</DescriptionDetails>

      <DescriptionTerm>Customer</DescriptionTerm>
      <DescriptionDetails>{loaded.order.customer.name}</DescriptionDetails>

      <DescriptionTerm>Event</DescriptionTerm>
      <DescriptionDetails>{loaded.order.event.name}</DescriptionDetails>

      <DescriptionTerm>Amount</DescriptionTerm>
      <DescriptionDetails>{loaded.order.amount.usd}</DescriptionDetails>

      <DescriptionTerm>Date</DescriptionTerm>
      <DescriptionDetails>{loaded.order.date}</DescriptionDetails>
    </DescriptionList>
  ),
};
