import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { UiColor } from "../../definitions";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  background-color: ${UiColor.yellow};
  border: 10px solid #5a5a5a;
  padding: 32px 20px;
  flex-shrink: 0;
`;

export const NoDecorationLinkStyle = css`
  text-decoration: none;
  color: inherit;
  &:nth-child(n + 3) {
    margin-top: 40px;
  }
  &:nth-child(2) {
    margin-top: 20px;
  }
`;

export const TopContainer = styled.div`
  margin-left: -16px;
  display: flex;
  align-items: flex-start;
`;

export const ArrowStyle = css`
  transform: scaleX(-1);
`;

export const TopLabel = styled.span`
  font-size: 68px;
  font-weight: bold;
  margin-top: -16px;
`;

export const OneLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Box = styled.div`
  background-color: #313131;
  height: 60px;
  width: 60px;
`;

export const TextContainer = styled.div``;

export const BigText = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-top: -12px;
`;

export const SmallText = styled.div`
  font-size: 20px;
  line-height: 16px;
  font-weight: 500;
`;
