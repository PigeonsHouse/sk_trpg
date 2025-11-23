import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { size } from "../../definitions";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Header = styled.div<{ color: string; isShrink?: boolean }>`
  background-color: ${(props) => props.color};
  position: relative;
  height: ${(props) => (props.isShrink ? size.x15 : size.x30)}px;
  transition: height 0.2s;
`;

export const BoardContainer = styled.div<{ isShrink?: boolean }>`
  position: absolute;
  top: ${size.x8}px;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.isShrink ? 0 : 1)};
  transition: opacity 0.2s;
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
  gap: ${size.x115}px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
