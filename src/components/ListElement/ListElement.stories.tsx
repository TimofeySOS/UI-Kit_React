import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListElement, { ListElementProps } from './ListElement';

export default {
  title: 'Components/ListElement',
  component: ListElement,
} as Meta;

const Template: StoryFn<ListElementProps> = (args) => <ListElement {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};
