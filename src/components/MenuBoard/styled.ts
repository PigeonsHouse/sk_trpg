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

export const Board = styled.div`
  background-color: ${UiColor.yellow};
  width: 160px;
  height: 120px;
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

export const Text = styled.span`
  font-family: ${FontFamily.Bold};
  font-weight: ${FontWeight.Bold};
  letter-spacing: 1px;
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 168px;
  left: 0;
  width: fit-content;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;
