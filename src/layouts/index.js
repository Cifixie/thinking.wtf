import React from "react";
import { injectGlobal } from "styled-components";

injectGlobal`
  * {
    box-sizing: border-box;
  }
`;

const Layout = ({ children }) => children();

export default Layout;
