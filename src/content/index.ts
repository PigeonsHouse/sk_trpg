import type { CharacterDetail, CharacterSummary } from "../types";

const summaryModules = import.meta.glob<CharacterSummary[]>("./characters.json", {
  eager: true,
  import: "default",
});

const detailModules = import.meta.glob<CharacterDetail>("./characters/*.json", {
  eager: true,
  import: "default",
});

export const characterSummaries = summaryModules["./characters.json"] ?? [];

export const characterDetails = Object.fromEntries(
  Object.entries(detailModules).map(([path, detail]) => {
    const fileId = path.replace("./characters/", "").replace(".json", "");
    return [fileId, detail];
  })
) as Record<string, CharacterDetail>;
