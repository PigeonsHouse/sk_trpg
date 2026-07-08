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

// 色相環に均等な虹色のグラデーションを敷くため、30度おきにHSLの色相を置いていく
const WHEEL_HUE_STEP = 30;
export const WHEEL_GRADIENT = `conic-gradient(${Array.from(
  { length: 360 / WHEEL_HUE_STEP + 1 },
  (_, i) => `hsl(${i * WHEEL_HUE_STEP}, 78%, 55%) ${i * WHEEL_HUE_STEP}deg`
).join(", ")})`;

export const Container = styled.div`
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const MenuBoardStyle = css`
  position: fixed;
  top: 0;
  right: 32px;
  z-index: 50;
`;

export const MainContentsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

export const HeadBoardContainer = styled.div`
  width: fit-content;
  flex-shrink: 0;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 72px;
`;

// PC: 色相環まわり
export const WHEEL_SIZE = 640;
export const RING_THICKNESS = 90;
export const ICON_SIZE = 84;
const ICON_GAP = 20;
export const ICON_RADIUS = WHEEL_SIZE / 2 + ICON_GAP + ICON_SIZE / 2;
export const WHEEL_AREA_SIZE = ICON_RADIUS * 2 + ICON_SIZE;
export const MIN_WHEEL_GAP_DEG = 14;

export const ChromaticArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
`;

export const WheelArea = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${WHEEL_AREA_SIZE}px;
  height: ${WHEEL_AREA_SIZE}px;
`;

export const WheelRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${WHEEL_SIZE}px;
  height: ${WHEEL_SIZE}px;
  border-radius: 50%;
  background: ${WHEEL_GRADIENT};
  border: 4px solid ${UiColor.darkGray};
  box-sizing: border-box;
`;

export const WheelHole = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${WHEEL_SIZE - RING_THICKNESS * 2}px;
  height: ${WHEEL_SIZE - RING_THICKNESS * 2}px;
  border-radius: 50%;
  background-color: ${UiColor.white};
  border: 2px solid ${UiColor.darkGray};
  box-sizing: border-box;
`;

export const WheelCenterLabel = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  color: ${UiColor.gray};
  font-size: 18px;
  letter-spacing: 2px;
`;

// 色相環の中心を原点に回転させ、逆回転で子要素だけ立たせるためのスポーク
export const IconSpoke = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: rotate(${(props) => props.angle}deg);
`;

export const IconSpokeInner = styled.div<{
  angle: number;
  radius: number;
  size: number;
}>`
  position: absolute;
  top: ${(props) => -(props.radius + props.size / 2)}px;
  left: ${(props) => -props.size / 2}px;
  transform: rotate(${(props) => -props.angle}deg);
`;

// アイコン共通(色相環・明度バー両方で使用)
export const IconLinkStyle = (color: string) => css`
  display: block;
  text-decoration: none;
  color: inherit;
  filter: ${DropShadowFilter};
  transition:
    filter 0.15s,
    transform 0.15s;
  &:hover {
    filter: drop-shadow(0 0 12px ${withAlpha(color, 0.7)});
    transform: scale(1.08);
  }
`;

export const IconImage = styled.img<{ ringColor: string; size: number }>`
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${UiColor.white};
  box-sizing: border-box;
  border: 3px solid ${UiColor.white};
  box-shadow: 0 0 0 3px ${(props) => props.ringColor};
`;

// PC: ホバー時にキャラ名を表示するツールチップ(色相環・明度バー両方で使用)
export const IconNameTag = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${UiColor.darkGray};
  color: ${UiColor.white};
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 13px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
  z-index: 10;
`;

// @emotion/babel-pluginが入っていない環境のため、コンポーネントセレクタ(${Component})は使えない。
// 代わりに固定のクラス名("icon-name-tag")を目印にしたプレーンなCSSセレクタでホバーを拾う
export const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .icon-name-tag {
    opacity: 1;
  }
`;

// PC: 無彩色バー
export const BAR_HEIGHT = 380;
export const BAR_WIDTH = 14;
export const BAR_ICON_SIZE = 64;
export const MIN_BAR_GAP_PX = BAR_ICON_SIZE + 16;

export const AchromaticArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
`;

export const SignBoard = styled.div`
  box-sizing: border-box;
  border: 4px solid ${UiColor.darkGray};
  background-color: ${UiColor.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 24px;
  filter: ${DropShadowFilter};
`;

export const SignLabel = styled.span`
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  font-size: 20px;
  letter-spacing: 2px;
`;

export const SignEnLabel = styled.span`
  font-family: ${FontFamily.Header};
  font-size: 12px;
  color: ${UiColor.darkGray};
  letter-spacing: 1px;
`;

export const AchromaticBarArea = styled.div`
  position: relative;
  width: ${BAR_ICON_SIZE * 2}px;
  height: ${BAR_HEIGHT + BAR_ICON_SIZE}px;
`;

export const AchromaticBar = styled.div`
  position: absolute;
  left: 50%;
  bottom: ${BAR_ICON_SIZE / 2}px;
  transform: translateX(-50%);
  width: ${BAR_WIDTH}px;
  height: ${BAR_HEIGHT}px;
  border-radius: ${BAR_WIDTH / 2}px;
  box-sizing: border-box;
  border: 3px solid ${UiColor.darkGray};
  background: linear-gradient(to top, #000000, #ffffff);
`;

export const AchromaticIconWrapper = styled.div<{ offset: number }>`
  position: absolute;
  left: 50%;
  bottom: ${(props) => props.offset}px;
  transform: translateX(-50%);
`;

export const AchromaticEndLabel = styled.span<{ position: "top" | "bottom" }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${(props) => (props.position === "top" ? "top: -20px;" : "bottom: -20px;")}
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 12px;
  color: ${UiColor.gray};
`;

// SPスタイル

export const SpMenuBoardStyle = css`
  position: fixed;
  right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 16px);
  z-index: 50;
`;

export const SpMainContentsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 120px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

// SpMainContentsContainer(左右paddingあり)の外、Containerの直接の子として置くことで、
// vw計算のブレイクアウトに頼らず自然に画面幅いっぱいに広げる
export const SpWheelSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

// SP: 色相環まわり。アイコンの縮小はやめ、代わりに色相環自体を画面より大きくして、
// 上部の一部だけが見える「窓」からスクロールで回転させて全キャラを見せる見せ方にする
export const SP_WHEEL_SIZE = 760;
export const SP_RING_THICKNESS = 110;
export const SP_ICON_SIZE = 64;
const SP_ICON_GAP = 20;
export const SP_ICON_RADIUS =
  SP_WHEEL_SIZE / 2 + SP_ICON_GAP + SP_ICON_SIZE / 2;
export const SP_WHEEL_AREA_SIZE = SP_ICON_RADIUS * 2 + SP_ICON_SIZE;
export const SP_MIN_WHEEL_GAP_DEG = 14;

// 色相環の「窓」の高さ。この高さ分だけ、色相環の上部が見える(縦スクロールをなるべく抑えるため控えめに)
export const SP_WHEEL_VIEWPORT_HEIGHT = 320;
// アイコンのリング(box-shadow)やホバー時の拡大が窓の上端でちょうど切れてしまわないための余白
const SP_WHEEL_TOP_OFFSET = 16;

export const SpWheelViewport = styled.div`
  position: relative;
  width: 100%;
  height: ${SP_WHEEL_VIEWPORT_HEIGHT}px;
  overflow: hidden;
  touch-action: none;
`;

export const SpWheelArea = styled.div`
  position: absolute;
  top: ${SP_WHEEL_TOP_OFFSET}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${SP_WHEEL_AREA_SIZE}px;
  height: ${SP_WHEEL_AREA_SIZE}px;
`;

export const SpWheelRing = styled.div<{ rotation: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}deg);
  width: ${SP_WHEEL_SIZE}px;
  height: ${SP_WHEEL_SIZE}px;
  border-radius: 50%;
  background: ${WHEEL_GRADIENT};
  border: 3px solid ${UiColor.darkGray};
  box-sizing: border-box;
`;

export const SpWheelHole = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${SP_WHEEL_SIZE - SP_RING_THICKNESS * 2}px;
  height: ${SP_WHEEL_SIZE - SP_RING_THICKNESS * 2}px;
  border-radius: 50%;
  background-color: ${UiColor.white};
  border: 2px solid ${UiColor.darkGray};
  box-sizing: border-box;
`;

export const SpScrollHint = styled.span`
  display: block;
  margin-top: 4px;
  text-align: center;
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 12px;
  color: ${UiColor.gray};
  letter-spacing: 1px;
`;

// SP: 無彩色バー(PCは縦置きだが、SPは横幅に収めるため横置きにする)
export const SP_BAR_LENGTH = 240;
export const SP_BAR_THICKNESS = 12;
export const SP_BAR_ICON_SIZE = 56;
export const SP_MIN_BAR_GAP_PX = SP_BAR_ICON_SIZE + 10;

export const SpAchromaticArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SpSignBoard = styled.div`
  box-sizing: border-box;
  border: 3px solid ${UiColor.darkGray};
  background-color: ${UiColor.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 20px;
  filter: ${DropShadowFilter};
`;

export const SpSignLabel = styled.span`
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  font-size: 16px;
  letter-spacing: 1px;
`;

export const SpSignEnLabel = styled.span`
  font-family: ${FontFamily.Header};
  font-size: 10px;
  color: ${UiColor.darkGray};
  letter-spacing: 1px;
`;

export const SpAchromaticBarArea = styled.div`
  position: relative;
  width: ${SP_BAR_LENGTH + SP_BAR_ICON_SIZE}px;
  height: ${SP_BAR_ICON_SIZE * 2}px;
`;

export const SpAchromaticBar = styled.div`
  position: absolute;
  top: 50%;
  left: ${SP_BAR_ICON_SIZE / 2}px;
  transform: translateY(-50%);
  width: ${SP_BAR_LENGTH}px;
  height: ${SP_BAR_THICKNESS}px;
  border-radius: ${SP_BAR_THICKNESS / 2}px;
  box-sizing: border-box;
  border: 2px solid ${UiColor.darkGray};
  background: linear-gradient(to right, #000000, #ffffff);
`;

export const SpAchromaticIconWrapper = styled.div<{ offset: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.offset}px;
  transform: translate(-50%, -50%);
`;
