import styled from "@emotion/styled";
import { size } from "../../definitions";

export const ContainerStyle = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div(ContainerStyle);
export const ContainerH1 = styled.h1(ContainerStyle);

// 目安　lg: 7文字以内、md: それより長い、sm: 未想定
export const CharacterName = styled.span<{ size?: "sm" | "md" | "lg" }>`
  font-family: YuGothic;
  font-weight: 500;
  white-space: nowrap;
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return size.x5;
      case "md":
        return size.x6;
      case "lg":
        return size.x7;
      default:
        return size.x7;
    }
  }}px;
  letter-spacing: ${(props) => {
    switch (props.size) {
      case "sm":
        return -12;
      case "md":
        return -8;
      case "lg":
        return 4;
      default:
        return 4;
    }
  }}px;
  line-height: ${size.x9}px;
`;

export const EnCharacterName = styled.span`
  font-size: 12px;
  font-family: Impact;
  letter-spacing: 1px;
`;
