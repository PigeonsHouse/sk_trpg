import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import {
  BREAK_POINT,
  FontFamily,
  FontWeight,
  SP_MAX_WIDTH,
  UiColor,
} from "../../../definitions";

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

export const CharacterHeaderContainer = styled.header<{ isShrink: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${(props) => (props.isShrink ? 500 : 1)};
`;

export const ProfileContainer = styled.section`
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
  bottom: -240px;
  height: 1000px;
  right: 0;
  pointer-events: none;
  z-index: 50;
`;

export const GradationBackground = styled.section<{
  startColor: string;
  endColor: string;
}>`
  padding: 0 20px;
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
  display: flex;
  align-items: center;
`;

export const CostumeTitle = styled.h2`
  margin: 0;
  font-size: 44px;
  font-weight: ${FontWeight.Bold};
  font-family: ${FontFamily.Header};
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

export const TrainBody = styled.section<{
  mainColor: string;
  secondColor: string;
}>`
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
  left: calc(50% - 800px - 480px - 40px);
`;

// 50%で右辺を中央寄せ、800pxで左辺を中央寄せ、440px(枠880pxの半分)で左辺を枠辺にぴったり、そこから40px離す
export const RightWindowStyle = css`
  top: 160px;
  right: calc(50% - 800px - 480px - 40px);
`;

export const RoadBackGround = styled.section`
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

export const BrailleBlock = styled.div<{ blockColor: string }>`
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
      ${(props) => props.blockColor},
      ${(props) => props.blockColor} 36px,
      white 36px,
      white 40px,
      ${(props) => props.blockColor} 40px,
      ${(props) => props.blockColor} 76px,
      white 76px,
      white 80px,
      ${(props) => props.blockColor} 80px,
      ${(props) => props.blockColor} 116px
    );
  right: calc(50% - 120px - 600px - 160px);
`;

/// ここからSPのみ利用するstyle
export const SpBackdrop = styled.div<{ open?: boolean }>`
  position: fixed;
  inset: 0;
  background-color: black;
  z-index: 30;
  transition: opacity, 0.2s;
  opacity: ${(props) => (props.open ? 0.4 : 0)};
  pointer-events: ${(props) => (props.open ? "unset" : "none")};
`;

export const SpMarginContainer = styled.div`
  max-width: ${SP_MAX_WIDTH}px;
  margin: auto;
  height: 100%;
`;

export const SpMarginContainerRelative = styled(SpMarginContainer)`
  position: relative;
`;

export const SpHeaderContainer = styled.div<{ bgColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.bgColor};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
  z-index: 50;
`;

export const SpNameBoardStyle = css`
  flex-grow: 1;
`;

export const SpMenuBoardStyle = css`
  position: absolute;
  top: 100px;
  right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 8px);
`;

export const SpContainer = styled.div`
  margin-top: 100px;
`;

export const SpSpriteContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  height: calc(100svh - 100px);
  min-height: 560px;
  position: relative;
  overflow-x: hidden;
`;

export const SpTrafficLightStyle = css`
  position: absolute;
  top: 16px;
  left: 8px;
`;

export const SpSingleLightStyle = css`
  position: absolute;
  top: 40%;
  right: 8px;
`;

export const SpShortIdBoardStyle = css`
  position: absolute;
  bottom: 80px;
  left: -8px;
`;

export const SpSprite = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
`;

export const SpGradationBackground = styled(GradationBackground)`
  padding: 32px 0;
`;

export const GradationInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SpCostumeContainer = styled.div`
  margin-left: 16px;
`;

export const SpCostumeTitle = styled(CostumeTitle)`
  font-size: 24px;
`;

export const SpCostumeStyle = css`
  && {
  }
`;

export const SpCommonFrameStyle = css`
  margin: 0 16px;
  padding: 22px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SpFrameTitle = styled.h2<{ withBorder?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  ${(props) =>
    props.withBorder ? `border-bottom: 1px solid ${UiColor.black};` : undefined}
`;

export const SpStatusContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const SpDescription = styled.span`
  font-size: 12px;
  line-height: 14px;
  white-space: pre-wrap;
`;

export const SpLabelAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

export const SpSkillsContainer = styled.div``;

export const SpWhiteOutContainer = styled.div<{ open?: boolean }>`
  height: fit-content;
  max-height: ${(props) => (props.open ? "1000px" : "200px")};
  overflow: hidden;
  position: relative;
  transition: height, 0.4s;
`;

export const SpWhiteOut = styled.div<{ open?: boolean }>`
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, white);
  opacity: ${(props) => (props.open ? 0 : 1)};
  transition: opacity, 0.4s;
`;

export const SpExpandButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: ${FontWeight.Bold};
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${UiColor.gray};
`;

export const SpExpandButtonIconStyle = css`
  transform: rotate(180deg);
`;

export const SpLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SpStatusLabelContainerStyle = css`
  justify-content: space-between;
`;

export const SpLabelStyle = css`
  margin-right: 32px;
  height: 32px;
`;

export const SpLabelValue = styled.span``;

export const SpStatusLabelStyle = cx(
  SpLabelStyle,
  css`
    && {
      width: 80px;
      margin-right: 16px;
    }
  `
);

export const SpSkillsFrameStyle = cx(
  SpCommonFrameStyle,
  css`
    padding-bottom: 0;
  `
);

export const SpQuestionContainer = styled.section<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 32px 0;
`;

export const SpQuestionFrameStyle = cx(
  SpCommonFrameStyle,
  css`
    gap: 32px;
  `
);

export const SpCenterTitle = styled(SpFrameTitle)`
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
`;

export const SpQuestionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SpQuestionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${FontWeight.Bold};
`;

export const SpQuestionLabel = styled.div<{ bgColor: string }>`
  width: 32px;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: ${FontFamily.Question};
  flex-shrink: 0;
`;

export const SpQuestionAvatar = styled.img<{ bgColor: string }>`
  aspect-ratio: 1 / 1;
  width: 100px;
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

{
  /* 三角形　w:32, h:24 */
}
export const SpQuestionSpeechBubble = styled.div<{ bgColor: string }>`
  position: relative;
  font-size: 12px;
  padding: 16px 24px;
  background-color: ${(props) => props.bgColor};
  border-radius: 16px;
  color: white;
  margin-top: 24px;

  &::before {
    content: "";
    position: absolute;
    top: -24px;
    left: calc(50% - 16px);
    border-style: solid;
    border-color: transparent;
    border-width: 24px 16px;
    border-top-width: 0;
    border-bottom-color: ${(props) => props.bgColor};
  }
`;
