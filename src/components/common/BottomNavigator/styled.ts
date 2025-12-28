import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT } from "../../../definitions";

export const Container = styled.div`
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

export const BoardStyle = (isSp?: boolean) => css`
  && {
    width: ${isSp ? 220 : 480}px;
    height: ${isSp ? 80 : 140}px;
    padding: 8px;
    justify-content: center;
    gap: 4px;
    &&& span:first-child {
      font-size: ${isSp ? 32 : 48}px;
      letter-spacing: 0;
      line-height: unset;
    }
    & span:last-child {
      font-size: ${isSp ? 8 : 10}px;
    }
    & > div:last-child {
      height: ${isSp ? 6 : 12}px;
      &::after {
        border-top-width: ${isSp ? 3 : 6}px;
        border-bottom-width: ${isSp ? 3 : 6}px;
      }
    }
  }
`;

export const BottomArrowStyle = css`
  position: relative;
`;

export const BottomNameStyle = (
  direction: "left" | "right",
  isSp?: boolean
) => css`
  position: absolute;
  ${direction}: 0;
  top: ${isSp ? 44 : 64}px;
  & span {
    color: black;
  }
  &&& span:first-child {
    font-size: ${isSp ? 28 : 40}px;
    letter-spacing: initial;
  }
  &&& span:last-child {
    font-size: ${isSp ? 10 : 12}px;
    letter-spacing: initial;
  }
`;
