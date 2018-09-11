import { css } from "styled-components";

export const maxWidth = "64em";

export const breakpoints = {
  desktop: maxWidth,
  tablet: "32em"
};

const media = Object.entries(breakpoints).reduce((acc, [platform, width]) => {
  acc[platform] = (...args) => css`
    @media (min-width: ${width}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
