import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from './table';
import { getOrders } from '../data';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bleed: {
      control: 'boolean',
    },
    dense: {
      control: 'boolean',
    },
    grid: {
      control: 'boolean',
    },
    striped: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  loaders: [
    async () => ({
      orders: await getOrders(),
    }),
  ],
  render: (args, { loaded }) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Order ID</TableHeader>
          <TableHeader>Customer</TableHeader>
          <TableHeader>Event</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Date</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {loaded.orders.map((order) => (
          <TableRow key={order.id} href={order.url}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer.name}</TableCell>
            <TableCell>{order.event.name}</TableCell>
            <TableCell>{order.amount.usd}</TableCell>
            <TableCell>{order.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  ...Default,
  args: {
    striped: true,
  },
};

export const Dense: Story = {
  ...Default,
  args: {
    dense: true,
  },
};

export const Grid: Story = {
  ...Default,
  args: {
    grid: true,
  },
};

export const Bleed: Story = {
  ...Default,
  args: {
    bleed: true,
  },
};
