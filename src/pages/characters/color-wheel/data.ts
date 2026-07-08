import { characterDetails } from "../../../content";

// HSLの彩度(saturation)は明度が0や100に近いほど実際の見た目以上に高く出てしまい、
// 黒に近い/白に近い色を「有彩色」と誤判定しやすい。
// そのため無彩色判定には明度に依存しないRGBのチャンス(max-min)を使う。
const ACHROMATIC_CHROMA_THRESHOLD = 0.12;

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const num = parseInt(value, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
};

const rgbToHsl = (r: number, g: number, b: number) => {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const chroma = max - min;
  const lightness = ((max + min) / 2) * 100;

  let hue = 0;
  if (chroma !== 0) {
    if (max === rNorm) {
      hue = 60 * (((gNorm - bNorm) / chroma) % 6);
    } else if (max === gNorm) {
      hue = 60 * ((bNorm - rNorm) / chroma + 2);
    } else {
      hue = 60 * ((rNorm - gNorm) / chroma + 4);
    }
  }
  if (hue < 0) hue += 360;

  return { hue, lightness, chroma };
};

export type ColorWheelEntry = {
  id: string;
  name: string;
  iconUrl: string;
  convertedIconUrl?: string;
  color: string;
  hue: number;
  lightness: number;
  isAchromatic: boolean;
};

// 奏調はクロマ上は無彩色判定になるが、指名で色相環側に置きたいとの要望があったための例外
const FORCE_CHROMATIC_IDS = ["kanade-shirabe"];

const entries: ColorWheelEntry[] = Object.entries(characterDetails)
  // "original"キーを持つファイル(派生キャラクター)は一覧系ページと同様に対象外
  .filter(([, detail]) => !detail.original)
  .map(([fileId, detail]) => {
    const [, ...rest] = fileId.split("-");
    const id = rest.join("-");
    const color = detail.colorPalette[0];
    const icon = detail.sprites[0];
    const { r, g, b } = hexToRgb(color);
    const { hue, lightness, chroma } = rgbToHsl(r, g, b);

    return {
      id,
      name: detail.name,
      iconUrl: icon.iconUrl,
      convertedIconUrl: icon.convertedIconUrl,
      color,
      hue,
      lightness,
      isAchromatic:
        chroma < ACHROMATIC_CHROMA_THRESHOLD &&
        !FORCE_CHROMATIC_IDS.includes(id),
    };
  });

// 色相環に配置する有彩色キャラ(色相の昇順)
export const chromaticEntries: ColorWheelEntry[] = entries
  .filter((entry) => !entry.isAchromatic)
  .sort((a, b) => a.hue - b.hue);

// 明度バーに配置する無彩色キャラ(黒に近い順)
export const achromaticEntries: ColorWheelEntry[] = entries
  .filter((entry) => entry.isAchromatic)
  .sort((a, b) => a.lightness - b.lightness);

export type WheelEntry = ColorWheelEntry & { angle: number };

/**
 * 色相が近いキャラ同士がアイコンで重なるのを防ぐための配置角度を計算する。
 * 輪の中で最も隙間が大きい箇所を切れ目にして一直線に展開し、
 * 元の色相の並び順を保ったまま前方向にだけ最小角度分押し出す(labelの衝突回避と同じ考え方)。
 */
export const resolveWheelAngles = (
  targetEntries: ColorWheelEntry[],
  minGapDeg: number
): WheelEntry[] => {
  if (targetEntries.length === 0) return [];
  const sorted = [...targetEntries].sort((a, b) => a.hue - b.hue);

  let seamIndex = 0;
  let maxGap = -Infinity;
  sorted.forEach((entry, i) => {
    const next = sorted[(i + 1) % sorted.length];
    const gap =
      i === sorted.length - 1
        ? next.hue + 360 - entry.hue
        : next.hue - entry.hue;
    if (gap > maxGap) {
      maxGap = gap;
      seamIndex = (i + 1) % sorted.length;
    }
  });

  const rotated = [...sorted.slice(seamIndex), ...sorted.slice(0, seamIndex)];

  let offset = 0;
  let prevRawHue = rotated[0].hue;
  const linearHues = rotated.map((entry, i) => {
    if (i > 0 && entry.hue < prevRawHue) {
      offset += 360;
    }
    prevRawHue = entry.hue;
    return entry.hue + offset;
  });

  const resolved: number[] = [];
  linearHues.forEach((hue, i) => {
    resolved.push(i === 0 ? hue : Math.max(hue, resolved[i - 1] + minGapDeg));
  });

  return rotated.map((entry, i) => ({
    ...entry,
    angle: resolved[i] % 360,
  }));
};

/**
 * 明度バーの上でアイコン同士が重ならないよう、昇順に並んだ値を
 * 最小間隔を保ちながら前方向にだけ押し出す(resolveWheelAnglesの直線版)。
 */
export const resolveLinearOffsets = (
  values: number[],
  minGap: number
): number[] => {
  const resolved: number[] = [];
  values.forEach((value, i) => {
    resolved.push(i === 0 ? value : Math.max(value, resolved[i - 1] + minGap));
  });
  return resolved;
};
