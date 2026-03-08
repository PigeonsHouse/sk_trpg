import { useEffect, useMemo, useState } from "react";
import type { NavigateFunction } from "react-router";
import type { CostumeItem } from "../../../../components";
import { CharactersId, Url } from "../../../../definitions";
import type { Sprites } from "../../../../types";

type Setting = {
  // そのキャラのページを開いた際に最初に指定されているインデックス
  // undefinedは0と同じ扱いとなる
  defaultIndex?: number;
  // defaultIndexが指定されているキャラでも、指定したインデックスを維持して遷移する場合はtrue
  keepSelectIndex?: boolean;
  // そのキャラの衣装差分から選択した際に、画像ファイルの名前
  // このパラメータだけ、そのキャラから遷移する際の設定
  navigateUrlOnSwitchSprite: (url: string) => CharactersId | undefined;
};
type Settings = Partial<Record<CharactersId, Setting>>;

const specialSettings: Settings = {
  [CharactersId.KanadeShirabe]: {
    navigateUrlOnSwitchSprite: (url: string) => {
      if (url.includes("hide")) {
        // hideは学生の調
        return CharactersId.KanadeShirabeStudent;
      } else if (url.match(/[2-9]\.png$/g)) {
        // 2以降は大人の調
        return CharactersId.KanadeShirabeAdult;
      }
    },
  },
  [CharactersId.KanadeShirabeAdult]: {
    defaultIndex: 1,
    // 青年奏から大人奏に移動する際はdefaultIndexを無視する
    keepSelectIndex: true,
    navigateUrlOnSwitchSprite: (url: string) => {
      if (url.includes("hide")) {
        // hideは学生の調
        return CharactersId.KanadeShirabeStudent;
      } else if (url.match(/[01]\.png$/g)) {
        // 1までは通常の調
        return CharactersId.KanadeShirabe;
      }
    },
  },
  [CharactersId.KanadeShirabeStudent]: {
    defaultIndex: 1,
    navigateUrlOnSwitchSprite: (url: string) =>
      // hideは通常の調
      url.includes("hide") ? CharactersId.KanadeShirabe : undefined,
  },
  [CharactersId.SasugaKiara]: {
    navigateUrlOnSwitchSprite: (url: string) =>
      url.includes("AmiraKamal") ? CharactersId.AmiraKamal : undefined,
  },
  [CharactersId.AmiraKamal]: {
    navigateUrlOnSwitchSprite: (url: string) =>
      url.includes("SasugaKiara") ? CharactersId.SasugaKiara : undefined,
  },
};

export const useSprites = (
  navigate: NavigateFunction,
  characterId: CharactersId,
  sprites: Sprites[]
) => {
  const [displaySpriteIndex, setDisplaySpriteIndex] = useState(
    specialSettings[characterId]?.defaultIndex ?? 0
  );
  const safeDisplaySpriteIndex = useMemo(
    () => Math.min(displaySpriteIndex, sprites.length - 1),
    [displaySpriteIndex, sprites]
  );

  const onClickFactory = (index: number, url: Sprites) => {
    let setIndex = index;
    let navigateCharacterId: CharactersId | undefined = undefined;
    let navigateUrl: string | undefined = undefined;

    // 衣装選択時にキャラIDを変える設定がないか確認
    const rule = specialSettings[characterId]?.navigateUrlOnSwitchSprite;
    if (rule) {
      const targetId = rule(url.iconUrl);
      if (targetId) {
        navigateCharacterId = targetId;
        navigateUrl = Url.characterTo(targetId);
      }
    }

    // キャラIDを変える場合、keepSelectIndexが無ければデフォルトのindexに切り替える
    if (navigateCharacterId) {
      const navigateCharacter = specialSettings[navigateCharacterId];
      if (
        navigateCharacter !== undefined &&
        !navigateCharacter.keepSelectIndex
      ) {
        setIndex = navigateCharacter.defaultIndex ?? 0;
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
    const defaultIndex = specialSettings[characterId]?.defaultIndex;

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
