import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT } from "../../definitions";

export const Container = styled.div`
  position: sticky;
  top: 0;
`;

export const Header = styled.div<{ mainColor: string; isShrink?: boolean }>`
  background-color: ${(props) => props.mainColor};
  position: relative;
  height: ${(props) => (props.isShrink ? 120 : 160)}px;
  transition: height 0.2s;
`;

export const BoardContainer = styled.div<{ isShrink?: boolean }>`
  position: absolute;
  top: ${(props) => (props.isShrink ? 0 : 16)}px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: ${BREAK_POINT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.isShrink ? "height: 100%;" : "")}
`;

export const BoardStyle = (isShrink?: boolean) => css`
  && {
    opacity: ${isShrink ? 0 : 1};
    transition: opacity 0.2s;
    transition: height 0.2s;
    ${isShrink ? "height: 120px;" : ""}
  }
`;

export const SmallNameContainerStyle = (isShrink?: boolean) => css`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  color: white;
  opacity: ${isShrink ? 1 : 0};
`;

export const ArrowContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 920px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const MenuBoardStyle = css`
  position: absolute;
  top: 120px;
  z-index: -1;
  left: calc(50% - ${BREAK_POINT / 2}px);
`;
