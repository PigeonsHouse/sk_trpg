import { css, Global } from "@emotion/react";
import { UiColor } from "../../definitions";

const styles = css`
  html,
  body {
    margin: 0;
    color: ${UiColor.black};
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 400;
  }
`;

export const GlobalStyles = () => <Global styles={styles} />;
