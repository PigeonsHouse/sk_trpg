import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const ProfileFrameStyle = css`
  width: 608px;
  height: 320px;
  padding: 54px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 48px;
  line-height: 0.8;
`;

export const ContentsContainer = styled.div`
  display: flex;
`;

export const DescriptionContainer = styled.div`
  padding-top: 40px;
  padding-right: 40px;
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 12px;
`;

export const ProfilesContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 4px;
  flex-direction: column;
  font-family: "Noto Sans JP";
  font-weight: 300;
`;

export const ProfileOneLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
`;
