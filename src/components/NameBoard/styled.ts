import styled from "@emotion/styled";

export const BoardContainer = styled.div`
  display: inline-block;
  min-width: 600px;
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
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterName = styled.span`
  line-height: 1.1;
  font-size: 64px;
  font-weight: 500;
  font-family: YuGothic;
  letter-spacing: 4px;
  white-space: nowrap;
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
