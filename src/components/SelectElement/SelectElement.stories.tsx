import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectElement, { SelectElementProps } from './SelectElement';

export default {
  title: 'Components/SelectElement',
  component: SelectElement,
} as Meta;

const Template: StoryFn<SelectElementProps> = (args) => <SelectElement {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  placeholder: 'Placeholder',
};

export const SelectOption = Template.bind({});
SelectOption.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  placeholder: 'Select option',
};

export const Text = Template.bind({});
Text.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  placeholder: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  placeholder: 'Disabled',
  disabled: true,
};
