import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchInput, { SearchInputProps } from './SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

const Template: StoryFn<SearchInputProps> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <SearchInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search',
};

export const Typing = Template.bind({});
Typing.args = {
  value: 'Typing',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Some text',
};
