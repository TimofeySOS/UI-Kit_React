import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Some text with info',
};
