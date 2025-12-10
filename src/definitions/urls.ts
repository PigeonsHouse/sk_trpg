import type { CharactersId } from "./charactersName";

export const Url = {
  top: "/",
  about: "/about",
  aboutTo: (anchor: string) => `/about#${anchor}`,
  characterTo: (characterId: CharactersId) => `/characters/${characterId}`,
};

export const TwitterUrl = "https://x.com/Suzuki_sepa";
export const SkebUrl = "https://skeb.jp/@Suzuki_sepa";
