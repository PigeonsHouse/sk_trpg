import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const NameBoardContainer = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  border: none;
`;

export const BottomArrowStyle = css`
  position: relative;
`;

export const BottomNameStyle = (position: "left" | "right") => css`
  position: absolute;
  ${position}: 0;
  top: 64px;
  & span {
    color: black;
  }
  & span:first-child {
    font-size: 40px;
    letter-spacing: initial;
  }
`;
