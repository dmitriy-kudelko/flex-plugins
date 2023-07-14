import React from 'react';
import { CustomView } from './CustomView';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/CustomView',
  component: CustomView,
  args: {},
} as ComponentMeta<typeof CustomView>;

export const Default: ComponentStory<typeof CustomView> = (args) => <CustomView {...args} />;

Default.storyName = 'CustomView';
