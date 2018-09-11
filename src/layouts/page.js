import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import media from "../utils/media";

const Skeleton = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-auto-rows: 1fr;
  grid-template-columns: [full-start] auto [content-start col-start] 1fr [col-end content-end] auto [full-end];
  ${media.tablet`
    grid-template-columns:
      [full-start] auto
      repeat(3, minmax(auto, [col-start] 21em))
      auto [full-end];
  `};
  ${media.desktop`
    grid-template-columns:
      [full-start] auto
      repeat(5, minmax(auto, [col-start] 12.8em))
      auto [full-end];
  `};
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
