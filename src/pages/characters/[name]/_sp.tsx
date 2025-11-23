import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { css } from "@emotion/css";
import {
  CostumeList,
  NameBoard,
  NavigateArrow,
  type CostumeItem,
} from "../../../components";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import {
  GradationBackground,
  SpContainer,
  SpMarginContainer,
  SpSpriteContainer,
} from "./styled";

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

  const costumeList: CostumeItem[] = useMemo(() => {
    return data.spritesUrl.map((url, index) => ({
      isSelected: displaySpriteIndex === index,
      imageUrl: url,
      // MEMO: 奏 調の特殊挙動はこの辺でカスタマイズできる
      onClick: () => {
        scrollTo(0, 0);
        setDisplaySpriteIndex(index);
      },
    }));
  }, [data, displaySpriteIndex, setDisplaySpriteIndex]);
  const [mainColor, secondColor, yellowColor] = useMemo(() => {
    return data.colorPalette;
  }, [data]);

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
    <SpContainer>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: mainColor,
          height: 100,
          textAlign: "center",
          fontSize: 60,
        }}
      >
        {/* TODO: 後でtransformじゃない実装に修正する */}
        <NameBoard
          name={data.name}
          enName={data.enName}
          color={mainColor}
          className={css`
            transform: translateX(calc(50vw - 300px)) translateY(-38px)
              scale(0.4);
          `}
        />
        <NavigateArrow
          height={24}
          direction="left"
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            left: "calc(50% - 120px - 36px - 16px)",
          }}
          disabled={!handlePrevious}
          onClick={handlePrevious}
        />
        <NavigateArrow
          height={24}
          direction="right"
          style={{
            position: "absolute",
            top: "calc(50% - 12px)",
            right: "calc(50% - 120px - 36px - 16px)",
          }}
          disabled={!handleNext}
          onClick={handleNext}
        />
      </div>
      <SpSpriteContainer color={mainColor}>
        <SpMarginContainer>
          <img
            style={{ width: "100%" }}
            src={data.spritesUrl[displaySpriteIndex]}
          />
        </SpMarginContainer>
      </SpSpriteContainer>
      <GradationBackground
        style={{ paddingLeft: 20, paddingRight: 20 }}
        startColor={mainColor}
        endColor={secondColor}
      >
        <SpMarginContainer>
          <CostumeList
            items={costumeList}
            color={mainColor}
            selectedColor={yellowColor}
            className={css`
              transform: translateX(-60px) scale(0.6);
            `}
          />
        </SpMarginContainer>
      </GradationBackground>
    </SpContainer>
  );
};
