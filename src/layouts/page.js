import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Skeleton = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] auto [content-start] repeat(
      5,
      [col-start] minmax(min-content, 12.8em) [col-end]
    )
    [content-end] auto [full-end];
  grid-template-rows: auto auto auto;
  grid-auto-flow: row;
  > * {
    grid-column: content;
  }
`;

const Page = ({ children }) => (
  <Skeleton>
    <Helmet>
      <title>Thinking, what the fuck</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    {children}
  </Skeleton>
);

export default Page;
