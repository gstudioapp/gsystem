import React from 'react';
import { addDecorator } from '@storybook/react';
import {CSSReset, ThemeProvider} from "@chakra-ui/core";

import customTheme from "../src/theme/theme";

const StoryWithThemeProvider = ({ children }) => (
    <ThemeProvider theme={customTheme}>
        <CSSReset />
        {children}
    </ThemeProvider>
)

addDecorator(storyFn => <StoryWithThemeProvider>{storyFn()}</StoryWithThemeProvider>);
