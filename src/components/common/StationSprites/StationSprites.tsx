import { useMemo, useState } from "react";
import { characterDetails } from "../../../content";
import { getImageUrl } from "../../../utils";
import { StationSpriteImage, StationSpritesContainer } from "./styled";

const MIN_COUNT = 3;
const MAX_COUNT = 5;
const MIN_BASE_SPRITE_HEIGHT = 500;
const MAX_BASE_SPRITE_HEIGHT = 950;
const VIEWPORT_HEIGHT_RATIO = 0.85;
// 画面をはみ出してよいので、そのぶん存在感を出すために2倍で表示する
const SIZE_MULTIPLIER = 2;
// 全キャラのスプライト画像は2400x4000で解像度・余白が統一されている
const SPRITE_ASPECT_RATIO = 2400 / 4000;
// 隣り合うスプライト同士の最低間隔(重なり防止の余白)
const MIN_SPACING_MARGIN = 24;
// 画面下にはみ出す量(スプライトの高さに対する割合)
const BOTTOM_OFFSET_RATIO = 0.44;

const shuffle = <Item,>(items: Item[]): Item[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const getInitialSpriteHeight = () => {
  const baseHeight =
    typeof window === "undefined"
      ? MAX_BASE_SPRITE_HEIGHT
      : Math.min(
          Math.max(
            window.innerHeight * VIEWPORT_HEIGHT_RATIO,
            MIN_BASE_SPRITE_HEIGHT
          ),
          MAX_BASE_SPRITE_HEIGHT
        );
  return baseHeight * SIZE_MULTIPLIER;
};

// 重ならないようにお互いの間隔がminSpacing以上になる中心座標をランダムに選ぶ
const pickNonOverlappingCenters = (
  centers: number[],
  desiredCount: number,
  minSpacing: number
) => {
  const chosen: number[] = [];
  for (const center of shuffle(centers)) {
    if (chosen.length >= desiredCount) break;
    const isFarEnough = chosen.every(
      (picked) => Math.abs(picked - center) >= minSpacing
    );
    if (isFarEnough) chosen.push(center);
  }
  return chosen;
};

type StationSpritesProps = {
  /** キャラページ遷移用カード同士の隙間の中心座標(px, TopItemContainer基準)一覧 */
  gapCenters: number[];
};

/**
 * 駅構内モチーフのTOPページに、リロード毎にランダムなキャラクターを
 * カード同士の隙間に重なるように、重ならない位置・ランダムな人数で立たせる装飾コンポーネント
 */
export const StationSprites: React.FC<StationSpritesProps> = ({
  gapCenters,
}) => {
  const [spriteHeight] = useState(getInitialSpriteHeight);
  const spriteWidth = spriteHeight * SPRITE_ASPECT_RATIO;
  const spriteBottom = -(spriteHeight * BOTTOM_OFFSET_RATIO);

  const sprites = useMemo(() => {
    if (gapCenters.length === 0) return [];

    const candidates = Object.entries(characterDetails).filter(
      ([, character]) => !character.original && character.sprites.length > 0
    );
    const desiredCount = Math.min(
      candidates.length,
      Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT + 1)) + MIN_COUNT
    );

    const centers = pickNonOverlappingCenters(
      gapCenters,
      desiredCount,
      spriteWidth + MIN_SPACING_MARGIN
    );

    return shuffle(candidates)
      .slice(0, centers.length)
      .map(([fileId, character], index) => ({
        fileId,
        src: getImageUrl(character.sprites[0], "sprite"),
        left: centers[index] - spriteWidth / 2,
      }));
  }, [gapCenters, spriteWidth]);

  return (
    <StationSpritesContainer>
      {sprites.map((sprite) => (
        <StationSpriteImage
          key={sprite.fileId}
          src={sprite.src}
          left={sprite.left}
          bottom={spriteBottom}
          height={spriteHeight}
        />
      ))}
    </StationSpritesContainer>
  );
};
