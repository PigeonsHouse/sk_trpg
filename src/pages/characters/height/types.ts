export type CharacterHeightEntry = {
  id: string;
  name: string;
  height: string;
  spriteUrl: string;
  convertedSpriteUrl?: string;
  color: string;
};

export type SortOrder = "asc" | "desc";

// 身長ガイド線: baselineから27pxおきに引き、10本目=100cm/15本目=150cm/20本目=200cmにラベルを付ける
export const GUIDE_LINE_STEP = 27;
export const GUIDE_LINE_COUNT = 20;
export const GUIDE_LINE_LABELS: Record<number, string> = {
  10: "100cm",
  15: "150cm",
  20: "200cm",
};
