import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../../definitions";

export const ProfileFrameStyle = css`
  width: 720px;
  height: 460px;
  padding: 54px;
  box-sizing: border-box;
  padding-right: 0;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 48px;
  margin-top: -4px;
  line-height: 58px;
  font-family: ${FontFamily.Header};
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
  width: 400px;
  flex-shrink: 0;
  box-sizing: border-box;
`;

export const ProfilesContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 4px;
  flex-direction: column;
  font-weight: ${FontWeight.Medium};
`;

export const ProfileOneLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
`;
