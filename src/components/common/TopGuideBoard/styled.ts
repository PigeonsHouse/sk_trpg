import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontWeight, UiColor } from "../../../definitions";

export const Container = styled.div<{ isSp?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  background-color: ${UiColor.yellow};
  border: 10px solid ${UiColor.gray};
  padding: ${(props) => (props.isSp ? "16px" : "32px 20px")};
  flex-shrink: 0;
  width: fit-content;
`;

export const NoDecorationLinkStyle = css`
  text-decoration: none;
  color: inherit;
  &:nth-child(n + 3) {
    margin-top: 32px;
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
  font-weight: ${FontWeight.Bold};
`;

export const TopLabel = styled.span<{ isSp?: boolean }>`
  font-size: ${(props) => (props.isSp ? 58 : 68)}px;
  font-weight: ${FontWeight.Bold};
  margin-top: -12px;
`;

export const OneLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Box = styled.div<{ isSp?: boolean }>`
  background-color: ${UiColor.darkGray};
  flex-shrink: 0;
  aspect-ratio: 1;
  width: ${(props) => (props.isSp ? 50 : 60)}px;
`;

export const TextContainer = styled.div``;

export const BigText = styled.div<{ isSp?: boolean }>`
  font-size: ${(props) => (props.isSp ? 28 : 36)}px;
  font-weight: ${FontWeight.Bold};
  margin-top: -12px;
  word-break: keep-all;
`;

export const SmallText = styled.div<{ isSp?: boolean }>`
  font-size: ${(props) => (props.isSp ? 15 : 20)}px;
  line-height: 16px;
`;
