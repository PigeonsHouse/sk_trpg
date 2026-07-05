import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  DropShadowFilter,
  FontFamily,
  FontWeight,
  SP_MAX_WIDTH,
  UiColor,
} from "../../../definitions";
import { withAlpha } from "../../../utils";
import { GUIDE_LINE_STEP } from "./types";

// PCは横スクロールバーを画面下部に固定したいのでheight:100dvh+overflow:hiddenで高さを固定する。
// SPは画面の高さに縮めるのではなく大きい画面に合わせたデザインにするため、縦は通常のページスクロールに任せる
export const Container = styled.div<{ isSp?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.isSp
      ? `
    min-height: 100dvh;
    overflow-x: hidden;
  `
      : `
    height: 100dvh;
    overflow: hidden;
  `}
`;

export const MenuBoardStyle = css`
  position: fixed;
  top: 0;
  right: 32px;
  z-index: 50;
`;

export const MainContentsContainer = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const HeadBoardContainer = styled.div`
  width: fit-content;
  flex-shrink: 0;
`;

// 駅の看板風の並び替えUI。行のレイアウトに高さを取らせないよう絶対配置で右寄せにする
export const SortSignWrapper = styled.button`
  position: absolute;
  top: 180px;
  right: 0;
  z-index: 3;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  filter: ${DropShadowFilter};
`;

export const SortSignBoard = styled.div`
  height: 80px;
  box-sizing: border-box;
  border: 4px solid ${UiColor.darkGray};
  background-color: ${UiColor.yellow};
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 28px;
`;

export const SortSignLabel = styled.span`
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  font-size: 22px;
  letter-spacing: 1px;
`;

const IMAGE_HEIGHT = 600;
// 立ち絵の下に表示する名前・身長ラベルの領域の高さ
const CAPTION_ZONE_HEIGHT = 64;
const ITEM_GAP = 0;
// 身長の基準線(baseline)の位置。仮置きの数値で、実際の数値は後から調整する想定
export const PC_BASELINE_BOTTOM = 98;

export const ComparisonScroller = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow-x: auto;
  overflow-y: auto;
`;

export const ComparisonRow = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  gap: ${ITEM_GAP}px;
  width: fit-content;
  padding: 0 16px;
  margin: 0 auto;
`;

// 身長の基準線。位置・見た目は仮置きで、実際の数値は後から調整する想定
export const BaselineBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${PC_BASELINE_BOTTOM}px;
  height: 2px;
  background-color: ${UiColor.gray};
  z-index: 0;
`;

// 身長ガイド線。baselineから1本分上を起点に、bottomではなくgapで等間隔に積む。仮置きの数値
export const GuideLinesContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${PC_BASELINE_BOTTOM + GUIDE_LINE_STEP}px;
  display: flex;
  flex-direction: column-reverse;
  gap: ${GUIDE_LINE_STEP}px;
  z-index: 0;
`;

// heightを0にし、ラベルの文字の高さが行の間隔に影響しないようにする(子要素はoverflowで見た目上あふれさせる)
export const GuideLineRow = styled.div`
  position: relative;
  height: 0;
`;

export const GuideLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${UiColor.gray};
  opacity: 0.35;
`;

// 横スクロールしても左端に固定表示されるようにstickyで配置し、
// transformで見た目だけ線の高さに合わせる(行の高さには影響させない)
export const GuideLineLabel = styled.span`
  position: sticky;
  left: 16px;
  z-index: 2;
  display: inline-block;
  transform: translateY(-50%);
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 14px;
  color: ${UiColor.darkGray};
  background-color: ${UiColor.white};
  padding: 0 6px;
`;

export const CharacterColumn = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoDecorationLinkStyle = css`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.7;
  }
`;

// PC版の立ち絵リンク。ホバー時にopacityではなく、キャラクターのcolorPalette[0]を使ったドロップシャドウを付ける
export const SpriteLinkStyle = (shadowColor: string) => css`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: filter 0.15s;
  &:hover {
    filter: drop-shadow(0 0 16px ${withAlpha(shadowColor, 0.5)});
  }
`;

export const SpriteImage = styled.img`
  display: block;
  height: ${IMAGE_HEIGHT}px;
  width: auto;
`;

export const CaptionContainer = styled.div`
  height: ${CAPTION_ZONE_HEIGHT}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const CaptionName = styled.span`
  max-width: 200px;
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CaptionHeight = styled.span`
  max-width: 200px;
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 13px;
  color: ${UiColor.gray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// SPスタイル

export const SpMenuBoardStyle = css`
  position: fixed;
  right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 16px);
  z-index: 50;
`;

export const SpMainContentsContainer = styled.div`
  position: relative;
  padding: 120px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const SpTitleContainer = styled.div`
  flex-shrink: 0;
`;

export const SpTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-family: ${FontFamily.Header};
  letter-spacing: 2px;
  text-align: center;
`;

export const SpEnTitle = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  font-family: ${FontFamily.Header};
  text-align: center;
  color: ${UiColor.gray};
`;

// 駅の看板風の並び替えUI(SP)。キャラクターの並びの下に配置する
export const SpSortSignWrapper = styled.button`
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  filter: ${DropShadowFilter};
`;

export const SpSortSignBoard = styled.div`
  height: 56px;
  box-sizing: border-box;
  border: 3px solid ${UiColor.darkGray};
  background-color: ${UiColor.yellow};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
`;

export const SpSortSignLabel = styled.span`
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  font-size: 16px;
  letter-spacing: 1px;
`;

const SP_IMAGE_HEIGHT = 480;
const SP_CAPTION_ZONE_HEIGHT = 48;
const SP_ITEM_GAP = 0;
// PCとSPで立ち絵の表示サイズが異なるため、身長の基準線・ガイド線の間隔はPCとの縦幅比率で計算し、
// 見た目のスケール(身長の高さ)がPCと揃うようにする
const SP_SCALE = SP_IMAGE_HEIGHT / IMAGE_HEIGHT;
export const SP_BASELINE_BOTTOM = PC_BASELINE_BOTTOM * SP_SCALE;
export const SP_GUIDE_LINE_STEP = GUIDE_LINE_STEP * SP_SCALE;

export const SpComparisonScroller = styled.div`
  margin-top: -8px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow-x: auto;
  padding-bottom: 16px;
`;

export const SpComparisonRow = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  gap: ${SP_ITEM_GAP}px;
  width: fit-content;
  padding: 0 16px;
  margin: 0 auto;
`;

// SPはキャラクター同士をさらに詰めるための追加調整
export const SpCharacterColumnStyle = css`
  margin-right: -40px;
`;

// 身長の基準線。位置・見た目は仮置きで、実際の数値は後から調整する想定
export const SpBaselineBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${SP_BASELINE_BOTTOM}px;
  height: 2px;
  background-color: ${UiColor.gray};
  z-index: 0;
`;

// 身長ガイド線。baselineから1本分上を起点に、bottomではなくgapで等間隔に積む。仮置きの数値
export const SpGuideLinesContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${SP_BASELINE_BOTTOM + SP_GUIDE_LINE_STEP}px;
  display: flex;
  flex-direction: column-reverse;
  gap: ${SP_GUIDE_LINE_STEP}px;
  z-index: 0;
`;

// heightを0にし、ラベルの文字の高さが行の間隔に影響しないようにする(子要素はoverflowで見た目上あふれさせる)
export const SpGuideLineRow = styled.div`
  position: relative;
  height: 0;
`;

export const SpGuideLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${UiColor.gray};
  opacity: 0.35;
`;

// 横スクロールしても左端に固定表示されるようにstickyで配置し、
// transformで見た目だけ線の高さに合わせる(行の高さには影響させない)
export const SpGuideLineLabel = styled.span`
  position: sticky;
  left: 16px;
  z-index: 2;
  display: inline-block;
  transform: translateY(-50%);
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 11px;
  color: ${UiColor.darkGray};
  background-color: ${UiColor.white};
  padding: 0 4px;
`;

export const SpSpriteImage = styled.img`
  display: block;
  height: ${SP_IMAGE_HEIGHT}px;
  width: auto;
`;

export const SpCaptionContainer = styled.div`
  height: ${SP_CAPTION_ZONE_HEIGHT}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const SpCaptionName = styled.span`
  max-width: 120px;
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SpCaptionHeight = styled.span`
  max-width: 120px;
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 10px;
  color: ${UiColor.gray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
