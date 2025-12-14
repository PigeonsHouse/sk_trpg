import styled from "@emotion/styled";

const isMasking = (label: string) => label.toLowerCase().startsWith("mask");

/**
 * キャラクターカラーを背景色に持つラベルボックス
 */
export const LabelBox = styled.div<{ backgroundColor: string; label: string }>`
  position: relative;
  width: 100px;
  height: 36px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  text-transform: uppercase;

  &::before {
    position: absolute;
    content: "${(props) => (isMasking(props.label) ? "" : props.label)}";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: contain;
    ${(props) =>
      isMasking(props.label)
        ? `background-image: url("/images/common/skill-mask.png");`
        : ""}
  }
`;
