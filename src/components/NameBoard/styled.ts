import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { UiColor } from "../../definitions";

export const BoardContainer = styled.div`
  display: inline-block;
  width: 600px;
  height: 176px;
  text-align: center;
  background-color: white;
  border: 5px solid ${UiColor.lightGray};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  user-select: none;
  z-index: 1;
`;

export const Bar = styled.div<{ mainColor: string }>`
  background-color: ${(props) => props.mainColor};
  width: 90%;
  height: 18px;
  position: relative;
  margin-right: 18px;
  &::after {
    position: absolute;
    border-color: transparent;
    border-style: solid;
    border-width: 9px 12px;
    border-left-color: ${(props) => props.mainColor};
    border-right: 0;
    top: 0;
    right: -12px;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
  }
`;

const fontSize = (nameSize?: "sm" | "md" | "lg") => {
  switch (nameSize) {
    case "sm":
      return 48;
    case "md":
      return 56;
    case "lg":
      return 64;
    default:
      return 64;
  }
};

export const NameContainerStyle = (nameSize?: "sm" | "md" | "lg") => css`
  & > span:first-child {
    font-size: ${fontSize(nameSize)}px;
  }
  & > span:last-child {
    font-size: 16px;
  }
`;
