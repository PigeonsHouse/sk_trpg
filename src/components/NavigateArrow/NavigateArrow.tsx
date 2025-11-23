import styled from "@emotion/styled";

type NavigateArrowProps = {
  direction: "left" | "right";
  height: number;
  color?: string;
  disabled: boolean;
};

export const NavigateArrow = styled.button<NavigateArrowProps>`
  padding: 0;
  background: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-style: solid;
  border-color: transparent;
  border-width: ${(props) => props.height / 2}px;
  ${(props) =>
    props.direction === "left"
      ? `
      border-left-width: 0;
      border-right-width: ${props.height * 1.5}px;
      border-right-color: ${props.disabled ? (props.color ? `hsl(from ${props.color} h s calc((l + 100) / 2))` : "#FFFFFF7F") : props.color || "white"};
    `
      : `
      border-right-width: 0;
      border-left-width: ${props.height * 1.5}px;
      border-left-color: ${props.disabled ? (props.color ? `hsl(from ${props.color} h s calc((l + 100) / 2))` : "#FFFFFF7F") : props.color || "white"};
      `}
`;
