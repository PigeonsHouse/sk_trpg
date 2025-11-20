import { css, Global } from "@emotion/react";
import { UiColor } from "../../definitions";

const styles = css`
  html,
  body {
    margin: 0;
    color: ${UiColor.black};
  }
`;

export const GlobalStyles = () => {
  return <Global styles={styles} />;
};
