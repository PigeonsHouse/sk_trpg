import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { size } from "../../definitions";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
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
  top: ${size.x8}px;
  & span {
    color: black;
  }
  & span:first-child {
    font-size: ${size.x5}px;
    letter-spacing: initial;
  }
`;
