import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight, UiColor } from "../../../definitions";

export const FrameStyle = css`
  margin: 0 16px;
  padding: 22px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 0;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  border-bottom: 1px solid ${UiColor.black};
`;

export const SkillsContainer = styled.div``;

export const SpWhiteOutContainer = styled.div<{ open?: boolean }>`
  height: fit-content;
  max-height: ${(props) => (props.open ? "1000px" : "200px")};
  overflow: hidden;
  position: relative;
  transition: height, 0.4s;
`;

export const LabelAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelStyle = css`
  margin-right: 32px;
  height: 32px;
`;

export const LabelValue = styled.span``;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: ${FontWeight.Bold};
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${UiColor.gray};
`;

export const ButtonIconStyle = css`
  transform: rotate(180deg);
`;

export const SpWhiteOut = styled.div<{ open?: boolean }>`
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, white);
  opacity: ${(props) => (props.open ? 0 : 1)};
  transition: opacity, 0.4s;
`;
