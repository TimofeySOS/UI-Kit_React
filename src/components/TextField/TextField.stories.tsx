import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const WithText: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState('Text');
  return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled',
  disabled: true,
};
