import styled from "@emotion/styled";
import { UiColor } from "../../../definitions";

const LightBoxSize = 56;
const LightBorder = 6;
const SelectedLightWidth = (isSp?: boolean) => (isSp ? 18 : 28);
const UnselectedLightWidth = (isSp?: boolean) => (isSp ? 10 : 16);
const ItemGap = (isSp?: boolean) => (isSp ? 16 : 20);
const MaxIconSize = (isSp?: boolean) => (isSp ? 72 : 100);
const IconSizeCalc = (isSp?: boolean) =>
  `min(calc((100vw - var(--scrollbar-width) - ${20 * 2}px - ${ItemGap(isSp) * 3}px) / 4), ${MaxIconSize(isSp)}px)`;
const BarWidth = 6;
const BarTopOffset = LightBoxSize / 2 - BarWidth / 2;
const BarLeftOffsetCalc = (isSp?: boolean) =>
  `calc(${IconSizeCalc(isSp)} / 2 - ${BarWidth / 2}px)`;
const ItemWidthCalc = (isSp?: boolean) =>
  `calc(${IconSizeCalc(isSp)} + ${ItemGap(isSp)}px)`;
const BarExtendLength = (isSp?: boolean) => (isSp ? 28 : 36);

export const ListContainer = styled.ul<{ isSp?: boolean }>`
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  padding-top: 16px;
  ${(props) => (props.isSp ? "padding-left: 0;" : "padding-bottom: 48px;")}
  box-sizing: border-box;
  list-style: none;
`;

export const OneLineContainer = styled.div<{ isSp?: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: ${(props) => ItemGap(props.isSp)}px;
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
  isSp?: boolean;
}>`
  width: ${(props) =>
    props.isSelected
      ? SelectedLightWidth(props.isSp)
      : UnselectedLightWidth(props.isSp)}px;
  height: ${(props) =>
    props.isSelected
      ? SelectedLightWidth(props.isSp)
      : UnselectedLightWidth(props.isSp)}px;
  border: ${LightBorder}px solid ${UiColor.gray};
  background-color: ${(props) =>
    props.isSelected ? props.selectedColor : "white"};
  border-radius: 4px;
  margin: ${(props) =>
    (LightBoxSize -
      (props.isSelected
        ? SelectedLightWidth(props.isSp)
        : UnselectedLightWidth(props.isSp))) /
      2 -
    LightBorder}px;
  z-index: 1;
`;

export const ImageContainer = styled.div<{
  backgroundColor: string;
  isSelected: boolean;
  isSp?: boolean;
}>`
  display: inline-block;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  overflow: hidden;
  width: ${(props) => IconSizeCalc(props.isSp)};
  aspect-ratio: 1;
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
  width: 100%;
  vertical-align: middle;
`;

export const Bar = styled.div<{
  idx: number;
  count: number;
  extendLeft: boolean;
  extendRight: boolean;
  isSp?: boolean;
}>`
  position: absolute;
  height: ${BarWidth}px;
  background-color: ${UiColor.gray};
  left: 0;
  top: ${BarTopOffset}px;
  width: calc(
    ${BarWidth}px + ${(props) => ItemWidthCalc(props.isSp)} *
      ${(props) => props.count - 1} +
      ${(props) => (props.extendLeft ? BarExtendLength(props.isSp) : 0)}px +
      ${(props) => (props.extendRight ? BarExtendLength(props.isSp) : 0)}px
  );
  margin-left: calc(
    ${(props) => BarLeftOffsetCalc(props.isSp)} -
      ${(props) => (props.extendLeft ? BarExtendLength(props.isSp) : 0)}px
  );
`;
