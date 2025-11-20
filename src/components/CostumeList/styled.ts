import styled from "@emotion/styled";
import { UiColor } from "../../definitions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  padding-left: 40px;
  position: relative;
  box-sizing: border-box;
  min-height: 300px;
`;

export const Bar = styled.div<{
  idx: number;
  count: number;
  extendLeft: boolean;
  extendRight: boolean;
}>`
  position: absolute;
  height: 6px;
  width: ${(props) =>
    (props.count - 1) * 122 +
    (props.extendLeft ? 36 : 0) +
    (props.extendRight ? 36 : 0)}px;
  top: ${(props) => 40 + 156 * props.idx}px;
  background-color: ${UiColor.gray};
  margin-left: ${(props) => (props.extendLeft ? 12 : 48)}px;
`;

export const OneLineContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

export const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemLight = styled.div<{
  isSelected: boolean;
  selectedColor: string;
}>`
  width: ${(props) => (props.isSelected ? 28 : 16)}px;
  height: ${(props) => (props.isSelected ? 28 : 16)}px;
  border: 6px solid ${UiColor.gray};
  background-color: ${(props) =>
    props.isSelected ? props.selectedColor : "white"};
  border-radius: 4px;
  margin: ${(props) => (props.isSelected ? 8 : 14)}px;
  z-index: 1;
`;

export const ImageContainer = styled.div<{ color: string }>`
  display: inline-block;
  background-color: ${(props) => props.color};
  border-radius: 9999px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100px;
  transform: scale(3) translateY(35%);
`;
