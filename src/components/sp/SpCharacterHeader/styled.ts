import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { DropShadowFilter, SP_MAX_WIDTH } from "../../../definitions";

export const Container = styled.div<{ bgColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.bgColor};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
  z-index: 50;
  filter: ${DropShadowFilter};
`;

export const NameBoardStyle = css`
  flex-grow: 1;
`;

export const MenuBoardStyle = css`
  position: absolute;
  top: 100px;
  right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 8px);
`;
