import {CSSReset} from "@chakra-ui/core";
import React, {FC} from "react";

import customTheme from "../../src/theme/theme";
import { ThemeProvider } from "../../src/components";

const StoryBookWrapper: FC = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    {children}
  </ThemeProvider>
)

export default StoryBookWrapper
