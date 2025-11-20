import { css } from "@emotion/css";
import styled from "@emotion/styled";

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
  max-width: 1200px;
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
  background: linear-gradient(
    hsl(from ${(props) => props.startColor} h calc(s + 20) 80 / 0.5),
    hsl(from ${(props) => props.endColor} h calc(s + 20) 80 / 0.5)
  );
  padding-top: 36px;
  overflow: hidden;
`;

export const StatusMainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
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
