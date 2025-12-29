import { css, Global } from "@emotion/react";
import { FontFamily, FontWeight, UiColor } from "../../../definitions";

const styles = css`
  html,
  body {
    margin: 0;
    color: ${UiColor.black};
    font-family: ${FontFamily.Regular};
    font-weight: ${FontWeight.Regular};
  }
  body button {
    color: unset;
  }
`;

/**
 * サイト全体のCSS指定
 */
export const GlobalStyles = () => <Global styles={styles} />;
