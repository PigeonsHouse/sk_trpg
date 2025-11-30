import styled from "@emotion/styled";

export const ContainerStyle = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const Container = styled.div(ContainerStyle);
export const ContainerH1 = styled.h1(ContainerStyle);

// 目安　lg: 7文字以内、md: それより長い、sm: 未想定
export const CharacterName = styled.span<{ size?: "sm" | "md" | "lg" }>`
  font-family: "BIZ UDPGothic", sans-serif;
  font-weight: 700;
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
        return -8;
      case "md":
        return -4;
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
  font-family: Anton, sans-serif;
  letter-spacing: 1px;
`;
