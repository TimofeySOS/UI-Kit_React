import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Notification, { NotificationProps } from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
} as Meta;

const Template: StoryFn<NotificationProps> = (args) => <Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Changes saved',
};
