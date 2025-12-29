import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  DropShadowFilter,
  FontFamily,
  FontWeight,
  UiColor,
} from "../../../definitions";

export const Container = styled.div`
  position: relative;
  padding-top: 48px;
  margin: 0 auto;
  width: 728px;
  filter: ${DropShadowFilter};
`;

export const Bar = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  width: 16px;
  height: 48px;
  background-color: ${UiColor.gray};
  top: 0;
  ${(props) => props.position}: 16px;
`;

export const Board = styled.div`
  height: 120px;
  background-color: ${UiColor.yellow};
  box-sizing: border-box;
  border: 4px solid ${UiColor.darkGray};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconStyle = css`
  position: absolute;
  left: 56px;
  transform: rotate(90deg);
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
`;

export const Label = styled.span`
  font-size: 40px;
`;

export const EnLabel = styled.span`
  font-size: 24px;
`;
