import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
  onClick: () => alert('Primary Button Clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
  onClick: () => alert('Secondary Button Clicked'),
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  children: 'Primary',
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  children: 'Secondary',
  disabled: true,
};
