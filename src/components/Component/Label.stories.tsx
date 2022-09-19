/**
 * 
 * This is the file used by storybook to show stories.
 * 
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from '../..';

const meta = {
  title: 'Label',
  component: Label,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: 'Label'
};
