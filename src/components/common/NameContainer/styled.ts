import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../../definitions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const fontSize = (size?: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return 40;
    case "md":
      return 48;
    case "lg":
      return 56;
    default:
      return 56;
  }
};
const letterSpacing = (size?: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return -8;
    case "md":
      return -4;
    case "lg":
      return 4;
    default:
      return 4;
  }
};

// 目安　lg: 7文字以内、md: それより長い、sm: 未想定
export const CharacterName = styled.span<{
  size?: "sm" | "md" | "lg";
  isSp?: boolean;
}>`
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  white-space: nowrap;
  font-size: ${(props) =>
    props.isSp ? fontSize(props.size) / 2 : fontSize(props.size)}px;
  letter-spacing: ${(props) => letterSpacing(props.size)}px;
  ${(props) => (props.isSp ? undefined : `line-height: 72px;`)}
`;

export const EnCharacterName = styled.span`
  font-size: 12px;
  font-family: ${FontFamily.Bold};
  letter-spacing: 1px;
`;
