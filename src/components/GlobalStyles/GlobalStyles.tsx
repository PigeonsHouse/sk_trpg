import { css, Global } from "@emotion/react";
import { FontFamily, FontWeight, UiColor } from "../../definitions";

const styles = css`
  html,
  body {
    margin: 0;
    color: ${UiColor.black};
    font-family: ${FontFamily.Regular};
    font-weight: ${FontWeight.Regular};
  }
`;

export const GlobalStyles = () => <Global styles={styles} />;
