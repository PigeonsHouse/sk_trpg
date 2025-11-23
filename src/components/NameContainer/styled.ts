import styled from "@emotion/styled";

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
        return 40;
      case "md":
        return 48;
      case "lg":
        return 56;
      default:
        return 56;
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
  line-height: 72px;
`;

export const EnCharacterName = styled.span`
  font-size: 12px;
  font-family: Impact;
  letter-spacing: 1px;
`;
