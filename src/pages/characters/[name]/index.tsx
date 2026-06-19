import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { characterDetails, characterSummaries } from "../../../content";
import { APP_NAME, CharactersId, Url } from "../../../definitions";
import { useBreakPoint, useScrollbarWidth } from "../../../hooks";
import { PcCharacterAbout } from "./_pc";
import { SpCharacterAbout } from "./_sp";
import { Loading } from "./styled";

const CharacterAbout = () => {
  // スタイル調整のため
  useScrollbarWidth();

  const navigate = useNavigate();
  const { name: rawCharacterId } = useParams();
  const characterId = useMemo(() => {
    const idList = Object.values(CharactersId) as readonly string[];
    const isValidId = rawCharacterId && idList.includes(rawCharacterId);
    if (!isValidId) {
      return null;
    }
    return rawCharacterId as CharactersId;
  }, [rawCharacterId]);
  useEffect(() => {
    if (characterId === null) {
      navigate(Url.characterTo(CharactersId.KanadeShirabe));
    }
  }, [characterId]);

  const [index, setIndex] = useState(0);
  const fileId = useMemo(() => {
    if (!characterId || characterSummaries.length === 0) return;
    const findIndex = characterSummaries.findIndex(
      (singleSummary) => singleSummary.id === characterId
    );
    if (findIndex === -1) return;
    setIndex(findIndex);
    const indexWithZero = String(findIndex).padStart(2, "0");
    return `${indexWithZero}-${characterId}`;
  }, [characterId]);
  const detail = fileId ? characterDetails[fileId] : undefined;

  const isLoading = !characterId || !detail;

  const title = detail
    ? `${detail.name} - ${APP_NAME}`
    : `キャラクター - ${APP_NAME}`;

  const { isPc } = useBreakPoint();

  return (
    <>
      <title>{title}</title>
      {isLoading ? (
        <Loading>isLoading...</Loading>
      ) : (
        <>
          {isPc ? (
            <PcCharacterAbout
              summary={characterSummaries}
              characterId={characterId}
              data={detail}
              index={index}
            />
          ) : (
            <SpCharacterAbout
              summary={characterSummaries}
              characterId={characterId}
              data={detail}
              index={index}
            />
          )}
        </>
      )}
    </>
  );
};

export default CharacterAbout;
