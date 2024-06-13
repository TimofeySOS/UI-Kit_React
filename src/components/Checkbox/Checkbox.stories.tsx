import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const SelectedTrueDisabledTrue = Template.bind({});
SelectedTrueDisabledTrue.args = {
  checked: true,
  disabled: true,
};

export const SelectedTrueDisabledFalse = Template.bind({});
SelectedTrueDisabledFalse.args = {
  checked: true,
  disabled: false,
};

export const SelectedFalseDisabledTrue = Template.bind({});
SelectedFalseDisabledTrue.args = {
  checked: false,
  disabled: true,
};

export const SelectedFalseDisabledFalse = Template.bind({});
SelectedFalseDisabledFalse.args = {
  checked: false,
  disabled: false,
};
