import React from "react";
import { Helmet } from "react-helmet";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #DCDCDD;
    font-size: calc(12px + (21 - 12) * ((100vw - 320px) / (1440 - 320)));
  }
  h1 {
      font-size: 2.827em;
      color: #1985A1;
      line-height:1.6;
      text-shadow: 2px 1px 4px #4C5C68;
      letter-spacing: 1.999px;
      text-align: center;
  }
  p {
      color: #46494C;
      line-height:1.333;
      letter-spacing:1.414px;
      text-align: justify;
  }
  html, body, div {
      height:100%;
  }
  small {
      font-size: 0.707em;
  }
`;

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Page>
    <Helmet>
      <title>Thinking.wtf</title>
      <link rel="canonical" href="https://thinking.wtf" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <h1>
      Coming Soon...
      <small>ish</small>
    </h1>
    <p>
      Vestibulum luctus metus ipsum, non fermentum lectus pharetra et. Ut lacus
      odio, tincidunt a faucibus nec, luctus id eros...
    </p>
  </Page>
);
