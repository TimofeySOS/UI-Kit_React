import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 22,
  currentPage: 1,
  onPageChange: (page: number) => console.log(`Selected page: ${page}`),
};
