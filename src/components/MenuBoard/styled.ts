import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight, UiColor } from "../../definitions";

export const Container = styled.div``;

export const BoardContainer = styled.div<{ isHide?: boolean }>`
  padding-top: 32px;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isHide ? 0 : 1)};
  position: relative;
`;

export const Board = styled.div<{ isSp?: boolean }>`
  background-color: ${UiColor.yellow};
  width: ${(props) => (props.isSp ? 104 : 160)}px;
  height: ${(props) => (props.isSp ? 80 : 120)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

export const IconStyle = (isOpen: boolean) => css`
  font-weight: ${FontWeight.Bold};
  transition: transform 0.2s;
  ${isOpen ? `transform: rotate(-90deg);` : undefined}
`;

export const Bar = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  width: 16px;
  height: 32px;
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
  isSp?: boolean;
}>`
  position: absolute;
  top: calc(100% + 16px);
  ${(props) => (props.isSp ? "right: 0;" : "left: 0;")}
  width: fit-content;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;
