// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import './Text.stories.scss';

const meta: Meta<typeof Text> = {
    component: Text,
    args: {
        children: 'The quick brown fox jumped over the lazy dog.',
        size: 'medium',
        type: 'primary',
    },
};
export default meta;

type TextStory = StoryObj<typeof Text>;

export const Primary: TextStory = {
    render: (props) => <Text {...props} />,
};
