import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { UiColor } from "../../../definitions";

export const BoardContainer = styled.div<{ isSp?: boolean }>`
  display: inline-block;
  ${(props) => (props.isSp ? `max-width: 280px;` : `width: 600px;`)}
  height: ${(props) => (props.isSp ? 80 : 176)}px;
  text-align: center;
  background-color: white;
  border: 5px solid ${UiColor.lightGray};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => (props.isSp ? 8 : 20)}px;
  box-sizing: border-box;
  user-select: none;
  z-index: 1;
`;

export const Bar = styled.div<{ mainColor: string; isSp?: boolean }>`
  background-color: ${(props) => props.mainColor};
  width: 90%;
  height: ${(props) => (props.isSp ? 8 : 18)}px;
  position: relative;
  margin-right: ${(props) => (props.isSp ? 8 : 18)}px;
  &::after {
    position: absolute;
    border-color: transparent;
    border-style: solid;
    border-width: ${(props) => (props.isSp ? "4px 8px" : "9px 12px")};
    border-left-color: ${(props) => props.mainColor};
    border-right: 0;
    top: 0;
    right: ${(props) => (props.isSp ? -8 : -12)}px;
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

export const NameContainerStyle = (
  nameSize?: "sm" | "md" | "lg",
  isSp?: boolean
) => css`
  && > span:first-child {
    font-size: ${isSp ? fontSize(nameSize) / 2 : fontSize(nameSize)}px;
  }
  && > span:last-child {
    font-size: ${isSp ? 8 : 16}px;
  }
`;
