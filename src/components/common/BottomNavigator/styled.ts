import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT } from "../../../definitions";

export const Container = styled.div`
  width: ${(3.3 / (1 + 3.3 + 1)) * 100}%;
  max-width: ${BREAK_POINT}px;
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

export const BoardStyle = css`
  && {
    width: 480px;
    height: 140px;
    padding: 8px;
    justify-content: center;
    gap: 4px;
    & span:first-child {
      font-size: 48px;
      letter-spacing: 0;
      line-height: unset;
    }
    & span:last-child {
      font-size: 10px;
    }
    & > div:last-child {
      height: 12px;
      &::after {
        border-top-width: 6px;
        border-bottom-width: 6px;
      }
    }
  }
`;

export const BottomArrowStyle = css`
  position: relative;
`;

export const BottomNameStyle = (direction: "left" | "right") => css`
  position: absolute;
  ${direction}: 0;
  top: 64px;
  & span {
    color: black;
  }
  & span:first-child {
    font-size: 40px;
    letter-spacing: initial;
  }
`;
