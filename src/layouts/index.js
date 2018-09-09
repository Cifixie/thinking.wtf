import React from "react";
import { Helmet } from "react-helmet";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";

const styles = () => injectGlobal`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #DCDCDD;
    font-size: calc(12px + (21 - 12) * ((100vw - 320px) / (1440 - 320)));
  }
`;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    styles();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Thinking.wtf</title>
          <link rel="canonical" href="https://thinking.wtf" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        {this.props.children()}
      </div>
    );
  }
}
