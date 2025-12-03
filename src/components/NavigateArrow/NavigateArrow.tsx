import styled from "@emotion/styled";

type NavigateArrowProps = {
  arrowDirection: "left" | "right";
  arrowHeight: number;
  mainColor?: string;
  disabled?: boolean;
};

export const NavigateArrow = styled.button<NavigateArrowProps>`
  padding: 0;
  background: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-style: solid;
  border-color: transparent;
  border-width: ${(props) => props.arrowHeight / 2}px;
  ${(props) =>
    props.arrowDirection === "left"
      ? `
      border-left-width: 0;
      border-right-width: ${props.arrowHeight * 1.5}px;
      border-right-color: ${props.disabled ? (props.mainColor ? `hsl(from ${props.mainColor} h s calc((l + 100) / 2))` : "rgb(255 255 255 / .5)") : props.mainColor || "white"};
    `
      : `
      border-right-width: 0;
      border-left-width: ${props.arrowHeight * 1.5}px;
      border-left-color: ${props.disabled ? (props.mainColor ? `hsl(from ${props.mainColor} h s calc((l + 100) / 2))` : "rgb(255 255 255 / .5)") : props.mainColor || "white"};
      `}
  z-index: 1;
`;
