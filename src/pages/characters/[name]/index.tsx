import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { APP_NAME, CharactersId, Url } from "../../../definitions";
import { useBreakPoint } from "../../../hooks";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { PcCharacterAbout } from "./_pc";
import { SpCharacterAbout } from "./_sp";
import { Loading } from "./styled";

const CharacterAbout = () => {
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
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [data, setData] = useState<CharacterDetail | undefined>();
  useEffect(() => {
    fetch("/data/characters.json")
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    if (!characterId || summary.length === 0) return;
    const findIndex = summary.findIndex(
      (singleSummary) => singleSummary.id === characterId
    );
    if (findIndex === -1) return;
    setIndex(findIndex);
    const indexWithZero = String(findIndex).padStart(2, "0");
    fetch(`/data/characters/${indexWithZero}-${characterId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const castedData = data as CharacterDetail;
        setData(castedData);
      });
  }, [characterId, summary]);

  const isLoading = !characterId || data === undefined;

  const title = data
    ? `${data.name} - ${APP_NAME}`
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
              summary={summary}
              characterId={characterId}
              data={data}
              index={index}
            />
          ) : (
            <SpCharacterAbout
              summary={summary}
              characterId={characterId}
              data={data}
              index={index}
            />
          )}
        </>
      )}
    </>
  );
};

export default CharacterAbout;
