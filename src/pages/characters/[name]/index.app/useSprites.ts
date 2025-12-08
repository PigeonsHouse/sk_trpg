import { useEffect, useMemo, useState } from "react";
import type { NavigateFunction } from "react-router";
import type { CostumeItem } from "../../../../components";
import type { Sprites } from "../../../../types";

const characterDefaultSpriteIndex: { [name: string]: number } = {
  "kanade-shirabe-adult": 1,
  "kanade-shirabe-student": 1,
};

export const useSprites = (
  navigate: NavigateFunction,
  characterId: string,
  sprites: Sprites[]
) => {
  const [displaySpriteIndex, setDisplaySpriteIndex] = useState(
    characterDefaultSpriteIndex[characterId] ?? 0
  );
  const safeDisplaySpriteIndex = useMemo(
    () => Math.min(displaySpriteIndex, sprites.length - 1),
    [displaySpriteIndex, sprites]
  );

  const onClickFactory = (index: number, url: Sprites) => {
    let setIndex = index;
    let navigateUrl = undefined;

    switch (characterId) {
      case "kanade-shirabe":
        if (url.iconUrl.includes("hide")) {
          navigateUrl = "/characters/kanade-shirabe-student";
        } else if (url.iconUrl.match(/[2-9]\.png$/g)) {
          navigateUrl = "/characters/kanade-shirabe-adult";
        }
        break;
      case "kanade-shirabe-student":
        navigateUrl = "/characters/kanade-shirabe";
        break;
      case "kanade-shirabe-adult":
        if (url.iconUrl.includes("hide")) {
          navigateUrl = "/characters/kanade-shirabe-student";
        } else if (url.iconUrl.match(/[01]\.png$/g)) {
          navigateUrl = "/characters/kanade-shirabe";
        }
        break;
    }
    // 学生の調のページはコスチュームリストが大きく変わるため、強制的にインデックスを1にする
    if (navigateUrl === "/characters/kanade-shirabe-student") {
      setIndex = 1;
    }

    return () => {
      console.log("from onClick", setIndex);
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
    console.log(characterId);
    console.log(displaySpriteIndex);
    const defaultIndex = characterDefaultSpriteIndex[characterId];

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
