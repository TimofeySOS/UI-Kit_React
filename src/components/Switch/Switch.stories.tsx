// src/components/Switch/Switch.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: StoryFn = (args) => {
  const [isOn, setIsOn] = useState(args.isOn);

  const handleToggle = (checked: boolean) => {
    setIsOn(checked);
  };

  return <Switch {...args} isOn={isOn} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
  isOn: false,
};
