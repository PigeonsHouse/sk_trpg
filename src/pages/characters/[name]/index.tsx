import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { APP_NAME } from "../../../definitions";
import { useBreakPoint } from "../../../hooks";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { PcCharacterAbout } from "./_pc";
import { SpCharacterAbout } from "./_sp";
import { Loading } from "./styled";

const CharacterAbout = () => {
  const { name: characterId } = useParams();
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [data, setData] = useState<CharacterDetail | undefined>();
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    if (!characterId) return;
    fetch(`${import.meta.env.BASE_URL}data/characters/${characterId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const castedData = data as CharacterDetail;
        setData(castedData);
      });
  }, [characterId]);

  const isLoading = characterId === undefined || data === undefined;

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
            />
          ) : (
            <SpCharacterAbout
              summary={summary}
              characterId={characterId}
              data={data}
            />
          )}
        </>
      )}
    </>
  );
};

export default CharacterAbout;
