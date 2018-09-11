import React from "react";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../theme";

injectGlobal`
  * {
    box-sizing: border-box;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>{children()}</ThemeProvider>
);

export default Layout;
