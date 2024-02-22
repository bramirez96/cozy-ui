// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { DarkModeProvider } from '../src/providers';
import { useDarkMode } from 'storybook-dark-mode';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            disable: true,
            grid: { disable: true },
        },
        darkMode: {
            stylePreview: true,
            classTarget: 'body',
            darkClass: 'ui-dark-mode',
            lightClass: 'ui-light-mode',
            dark: themes.dark,
            light: themes.dark,
        },
    },
    decorators: [
        function _StorybookDarkModeWrapper(renderStory) {
            const darkMode = useDarkMode();

            return (
                <DarkModeProvider darkMode={darkMode}>
                    {renderStory()}
                </DarkModeProvider>
            );
        },
        function _StorybookRouterWrapper(renderStory) {
            return <BrowserRouter>{renderStory()}</BrowserRouter>;
        },
    ],
};

export default preview;
