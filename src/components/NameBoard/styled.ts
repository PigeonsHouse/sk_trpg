import styled from "@emotion/styled";

export const BoardContainer = styled.div`
  display: inline-block;
  width: 600px;
  height: 176px;
  text-align: center;
  background-color: white;
  border: 5px solid #d2d2d2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterName = styled.span<{ size?: "sm" | "md" | "lg" }>`
  line-height: 72px;
  font-weight: 500;
  font-family: YuGothic;
  white-space: nowrap;
  font-size: ${(props) =>
    props.size === "md" ? 52 : props.size === "sm" ? 48 : 64}px;
  letter-spacing: ${(props) =>
    props.size === "md" ? -8 : props.size === "sm" ? -6 : 4}px;
`;

export const EnCharacterName = styled.span`
  font-size: 16px;
  font-family: Impact;
  letter-spacing: 1px;
`;

export const Bar = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 480px;
  height: 18px;
  position: relative;
  margin-right: 18px;
  &::after {
    position: absolute;
    border-color: transparent;
    border-style: solid;
    border-width: 9px 12px;
    border-left-color: ${(props) => props.color};
    border-right: 0;
    top: 0;
    right: -12px;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
  }
`;
