import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT, UiColor } from "../../../definitions";

export const Loading = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 40px;
`;

// ヘッダーサイズが変わるため、このContainerにはmargin-topを付け、ヘッダーはstickyで追従する形になっている。
// ヘッダーのheightが200px～120pxの間を取るため、縮んだ後に戻るギリギリまで上に行くとmarginが見えてしまう。
// そのため、縮みうる範囲はpaddingとして要素を置けるようにしておく。
export const Container = styled.div`
  margin-top: 120px;
  padding-top: 80px;
`;

export const CharacterHeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 620px;
  position: relative;
`;

// ヘッダーのheightが200px～120pxの間を取るため、ヘッダーと接しているこの画像は、80px伸ばして上にずらしている
export const BackgroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: calc(100% + 80px);
  z-index: -1;
  transform: translateY(-80px);
`;

export const ProfileMainContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  max-width: ${BREAK_POINT}px;
  margin: auto;
`;

export const ProfileFrameStyle = css`
  overflow-y: hidden;
  margin-top: 108px;
`;

export const MainSpriteImage = styled.img`
  position: absolute;
  bottom: -160px;
  height: 130%;
  right: 0px;
  z-index: 1000;
`;

export const GradationBackground = styled.div<{
  startColor: string;
  endColor: string;
}>`
  padding-top: 36px;
  overflow: hidden;
  background-image:
    linear-gradient(
      hsl(from ${(props) => props.startColor} h calc(s + 20) 80 / 0.5),
      hsl(from ${(props) => props.endColor} h calc(s + 20) 80 / 0.5)
    ),
    repeating-linear-gradient(
      transparent,
      transparent 255px,
      ${UiColor.gray} 256px,
      ${UiColor.gray} 256px
    ),
    repeating-linear-gradient(
      270deg,
      transparent,
      transparent 435px,
      ${UiColor.gray} 436px,
      ${UiColor.gray} 436px
    );
`;

export const CostumeContainer = styled.div`
  padding-left: 32px;
`;

export const CostumeTitleContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
`;

export const CostumeTitle = styled.span`
  font-size: 44px;
  font-weight: bold;
  line-height: 1;
`;

export const TwoColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 64px;
  margin: 0 32px;
  margin-bottom: 80px;
`;

export const LeftColumnContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
`;

export const RightColumnContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding-top: 176px;
`;

export const TrainBody = styled.div<{ mainColor: string; secondColor: string }>`
  min-height: 1080px;
  position: relative;
  background: linear-gradient(
    0deg,
    ${(props) => props.secondColor},
    ${(props) => props.secondColor} 256px,
    ${(props) => props.mainColor} 257px
  );
  z-index: 0;
  padding: 80px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

// 50%で左辺を中央寄せ、800pxで右辺を中央寄せ、440px(枠880pxの半分)で右辺を枠辺にぴったり、そこから40px離す
export const LeftWindowStyle = css`
  top: 160px;
  left: calc(50% - 800px - 440px - 40px);
`;

// 50%で右辺を中央寄せ、800pxで左辺を中央寄せ、440px(枠880pxの半分)で左辺を枠辺にぴったり、そこから40px離す
export const RightWindowStyle = css`
  top: 160px;
  right: calc(50% - 800px - 440px - 40px);
`;

export const RoadBackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 200px;
  background-image:
    repeating-linear-gradient(
      transparent,
      transparent 255px,
      ${UiColor.gray} 256px,
      ${UiColor.gray} 256px
    ),
    repeating-linear-gradient(
      270deg,
      transparent,
      transparent 435px,
      ${UiColor.gray} 436px,
      ${UiColor.gray} 436px
    );
  overflow-x: hidden;
  position: relative;
`;

export const MarginContainer = styled.div`
  width: ${BREAK_POINT}px;
  margin: auto;
`;

export const BrailleBlock = styled.div<{ color: string }>`
  position: absolute;
  width: 116px;
  top: 0;
  bottom: 0;
  background:
    repeating-linear-gradient(
      180deg,
      transparent,
      transparent 116px,
      white 116px,
      white 120px
    ),
    linear-gradient(
      90deg,
      ${(props) => props.color},
      ${(props) => props.color} 36px,
      white 36px,
      white 40px,
      ${(props) => props.color} 40px,
      ${(props) => props.color} 76px,
      white 76px,
      white 80px,
      ${(props) => props.color} 80px,
      ${(props) => props.color} 116px
    );
  right: calc(50% - 120px - 600px - 160px);
`;

export const BottomNavigatorContainer = styled.div`
  width: 100%;
  margin: auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const NameBoardContainer = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  border: none;
`;

export const BottomArrowStyle = css`
  position: relative;
`;

export const BottomNameStyle = (position: "left" | "right") => css`
  position: absolute;
  ${position}: 0;
  top: 60px;
  & span {
    color: black;
  }
  & span:first-child {
    font-size: 40px;
    letter-spacing: initial;
  }
`;
