import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { CharacterDetail, CharacterSummary } from "../../../types";

type SpCharacterAboutProps = {
  characterId: string;
  data: CharacterDetail;
};

export const SpCharacterAbout: React.FC<SpCharacterAboutProps> = ({
  characterId,
  data,
}) => {
  const navigate = useNavigate();

  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [previousCharacterId, setPreviousCharacterId] = useState<
    string | undefined
  >();
  const [nextCharacterId, setNextCharacterId] = useState<string | undefined>();
  const [displaySpriteIndex, setDisplaySpriteIndex] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    let prevId: string | undefined = undefined;
    let nextId: string | undefined = undefined;
    let isFind = false;
    summary.map((summaryData) => {
      if (summaryData.id === characterId) {
        isFind = true;
      } else if (isFind && nextId === undefined) {
        nextId = summaryData.id;
      }
      if (!isFind) {
        prevId = summaryData.id;
      }
    });
    setPreviousCharacterId(prevId);
    setNextCharacterId(nextId);
  }, [data, summary]);

  const handlePrevious = previousCharacterId
    ? () => {
        setDisplaySpriteIndex(0);
        navigate(`/characters/${previousCharacterId}`);
      }
    : undefined;
  const handleNext = nextCharacterId
    ? () => {
        setDisplaySpriteIndex(0);
        navigate(`/characters/${nextCharacterId}`);
      }
    : undefined;

  return (
    <div
      style={{
        backgroundColor: `rgb(from ${data.colorPalette[0]} calc(r + 50) calc(g + 50) calc(b + 50))`,
        minHeight: "100dvh",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          height: "100dvh",
          margin: "auto",
          backgroundColor: data.colorPalette[0],
        }}
      >
        <div onClick={handlePrevious} style={{ height: 30 }}>
          {previousCharacterId ? "←前へ" : ""}
        </div>
        <h1 style={{ margin: 0 }}>{data.name}</h1>
        <div onClick={handleNext} style={{ height: 30 }}>
          {nextCharacterId ? "次へ→" : ""}
        </div>
        <img
          src={data.spritesUrl[displaySpriteIndex]}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
