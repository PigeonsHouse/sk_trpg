import { useEffect, useMemo, useState } from "react";
import type { NavigateFunction } from "react-router";
import type { CostumeItem } from "../../../../components";
import { CharactersId, Url } from "../../../../definitions";
import type { Sprites } from "../../../../types";

type Setting = {
  defaultIndex?: number;
  forceIndex?: number;
  navigateUrlOnSwitchSprite: ((url: string) => CharactersId | undefined)[];
};
type Settings = Map<CharactersId, Setting>;

const specialSettings: Settings = new Map([
  [
    CharactersId.KanadeShirabe,
    {
      navigateUrlOnSwitchSprite: [
        (url: string) =>
          // hideは学生の調
          url.includes("hide") ? CharactersId.KanadeShirabeStudent : undefined,
        (url: string) =>
          // 2以降は大人の調
          url.match(/[2-9]\.png$/g)
            ? CharactersId.KanadeShirabeAdult
            : undefined,
      ],
    },
  ],
  [
    CharactersId.KanadeShirabeAdult,
    {
      defaultIndex: 1,
      navigateUrlOnSwitchSprite: [
        (url: string) =>
          // hideは学生の調
          url.includes("hide") ? CharactersId.KanadeShirabeStudent : undefined,
        (url: string) =>
          // 1までは通常の調
          url.match(/[01]\.png$/g) ? CharactersId.KanadeShirabe : undefined,
      ],
    },
  ],
  [
    CharactersId.KanadeShirabeStudent,
    {
      defaultIndex: 1,
      navigateUrlOnSwitchSprite: [
        (url: string) =>
          // hideは通常の調
          url.includes("hide") ? CharactersId.KanadeShirabe : undefined,
      ],
      // 学生の調のページはコスチュームリストが大きく変わるため、強制的にインデックスを1にする
      forceIndex: 1,
    },
  ],
]);

export const useSprites = (
  navigate: NavigateFunction,
  characterId: CharactersId,
  sprites: Sprites[]
) => {
  const [displaySpriteIndex, setDisplaySpriteIndex] = useState(
    specialSettings.get(characterId)?.defaultIndex ?? 0
  );
  const safeDisplaySpriteIndex = useMemo(
    () => Math.min(displaySpriteIndex, sprites.length - 1),
    [displaySpriteIndex, sprites]
  );

  const onClickFactory = (index: number, url: Sprites) => {
    let setIndex = index;
    let navigateCharacterId: CharactersId | undefined = undefined;
    let navigateUrl: string | undefined = undefined;

    const rules =
      specialSettings.get(characterId)?.navigateUrlOnSwitchSprite ?? [];
    for (const rule of rules) {
      const targetId = rule(url.iconUrl);
      if (targetId) {
        navigateCharacterId = targetId;
        navigateUrl = Url.characterTo(targetId);
      }
    }

    if (navigateCharacterId) {
      const forceIndex = specialSettings.get(navigateCharacterId)?.forceIndex;
      if (forceIndex) {
        setIndex = forceIndex;
      }
    }

    return () => {
      scrollTo({ top: 0, behavior: "smooth" });
      setDisplaySpriteIndex(setIndex);
      navigateUrl && navigate(navigateUrl);
    };
  };

  const costumeList: CostumeItem[] = useMemo(() => {
    return sprites.map((url, index) => ({
      isSelected: displaySpriteIndex === index,
      imageUrl: url.iconUrl,
      onClick: onClickFactory(index, url),
    }));
  }, [displaySpriteIndex, onClickFactory]);

  useEffect(() => {
    const defaultIndex = specialSettings.get(characterId)?.defaultIndex;

    if (defaultIndex === undefined) {
      setDisplaySpriteIndex(0);
    } else {
      if (displaySpriteIndex === 0) {
        setDisplaySpriteIndex(defaultIndex);
      }
    }
  }, [characterId]);

  return {
    displaySpriteIndex: safeDisplaySpriteIndex,
    costumeList,
  };
};
