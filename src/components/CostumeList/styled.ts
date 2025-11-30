import styled from "@emotion/styled";
import { UiColor } from "../../definitions";

export const Container = styled.div``;

export const TitleContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
`;

export const ListContainer = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 40px;
  padding-bottom: 48px;
  position: relative;
  box-sizing: border-box;
  list-style: none;
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

export const Item = styled.li``;

export const SingleItemContainer = styled.button`
  padding: 0;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:focus > div {
    filter: brightness(100%);
  }
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

export const ImageContainer = styled.div<{
  color: string;
  isSelected: boolean;
}>`
  display: inline-block;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  cursor: pointer;
  transition: filter 0.1s;
  ${(props) =>
    !props.isSelected &&
    `&:not(:hover) {
      filter: brightness(50%);
    }`}
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100px;
`;
