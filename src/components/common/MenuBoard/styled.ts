import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  DropShadowFilter,
  FontFamily,
  FontWeight,
  UiColor,
} from "../../../definitions";

export const Container = styled.div``;

export const BoardContainer = styled.div<{ isHide?: boolean; isSp?: boolean }>`
  padding-top: ${(props) => (props.isSp ? 20 : 32)}px;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isHide ? 0 : 1)};
  position: relative;
  filter: ${DropShadowFilter};
`;

export const Board = styled.div<{
  isHide?: boolean;
  disabled?: boolean;
  isSp?: boolean;
}>`
  background-color: ${UiColor.yellow};
  width: ${(props) => (props.isSp ? 104 : 160)}px;
  height: ${(props) => (props.isSp ? 80 : 120)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  ${(props) =>
    props.isHide || props.disabled
      ? "pointer-events: none;"
      : "cursor: pointer;"}
`;

export const IconStyle = (isOpen: boolean) => css`
  font-weight: ${FontWeight.Bold};
  transition: transform 0.2s;
  transform: rotate(${isOpen ? 270 : 180}deg);
`;

export const Bar = styled.div<{ position: "left" | "right"; isSp?: boolean }>`
  position: absolute;
  width: ${(props) => (props.isSp ? 8 : 16)}px;
  height: ${(props) => (props.isSp ? 20 : 32)}px;
  background-color: ${UiColor.gray};
  top: 0;
  ${(props) => props.position}: 8px;
`;

export const Text = styled.span<{ isSp?: boolean }>`
  font-family: ${FontFamily.Bold};
  font-weight: ${FontWeight.Bold};
  letter-spacing: 1px;
  font-size: ${(props) => (props.isSp ? 12 : 16)}px;
`;

export const MenuContainer = styled.div<{
  isOpen: boolean;
}>`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  width: fit-content;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;
