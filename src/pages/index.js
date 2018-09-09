import React from "react";
import styled from "styled-components";

const Page = styled.div`
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.827em;
    color: #1985a1;
    line-height: 1.6;
    text-shadow: 2px 1px 4px #4c5c68;
    letter-spacing: 1.999px;
    text-align: center;
  }

  p {
    color: #46494c;
    line-height: 1.333;
    letter-spacing: 1.414px;
    text-align: justify;
  }

  small {
    font-size: 0.707em;
  }
`;

export default () => (
  <Page>
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
