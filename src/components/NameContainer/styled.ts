import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 目安　lg: 7文字以内、md: それより長い、sm: 未想定
export const CharacterName = styled.span<{ size?: "sm" | "md" | "lg" }>`
  font-family: YuGothic;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  font-size: ${(props) =>
    props.size === "md" ? 44 : props.size === "sm" ? 40 : 56}px;
  letter-spacing: ${(props) =>
    props.size === "md" ? -8 : props.size === "sm" ? -6 : 4}px;
  line-height: 72px;
`;

export const EnCharacterName = styled.span`
  font-size: 12px;
  font-family: Impact;
  letter-spacing: 1px;
  color: white;
`;
