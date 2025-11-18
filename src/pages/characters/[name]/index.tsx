import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { NameBoard } from "../../../components";
import { BoardContainer, Container, Header } from "./styled";
import type { CharacterDetail, CharacterSummary } from "../../../types";

const CharacterAbout = () => {
  const navigate = useNavigate();

  const { name: characterId } = useParams();
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [data, setData] = useState<CharacterDetail | undefined>();
  const [previousCharacterId, setPreviousCharacterId] = useState<
    string | undefined
  >();
  const [nextCharacterId, setNextCharacterId] = useState<string | undefined>();

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters/${characterId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const castedData = data as CharacterDetail;
        setData(castedData);

        let prevId: string | undefined = undefined;
        let nextId: string | undefined = undefined;
        let isFind = false;
        summary.map((data) => {
          if (data.id === characterId) {
            isFind = true;
          } else if (isFind && nextId === undefined) {
            nextId = data.id;
          }
          if (!isFind) {
            prevId = data.id;
          }
        });
        setPreviousCharacterId(prevId);
        setNextCharacterId(nextId);
      });
  }, [characterId, summary]);

  const isLoading = data === undefined;
  const title = data ? `${data.name} - キャラクター` : "キャラクター";

  const handlePrevious = useCallback(() => {
    if (previousCharacterId) {
      navigate(`/characters/${previousCharacterId}`);
    }
  }, [previousCharacterId]);
  const handleNext = useCallback(() => {
    if (nextCharacterId) {
      navigate(`/characters/${nextCharacterId}`);
    }
  }, [nextCharacterId]);

  return (
    <>
      <title>{title}</title>
      {isLoading ? (
        <>isLoading...</>
      ) : (
        <Container>
          <Header color={data.colorPalette[0]}>
            <span
              style={{
                position: "absolute",
                left: 100,
                fontSize: 60,
                color: previousCharacterId
                  ? "white"
                  : "rgb(from white r g b / 0.5)",
                transform: "scale(1.5, 1)",
                cursor: previousCharacterId ? "pointer" : "default",
              }}
              onClick={handlePrevious}
            >
              {"◀"}
            </span>
            <span
              style={{
                position: "absolute",
                right: 100,
                fontSize: 60,
                color: nextCharacterId
                  ? "white"
                  : "rgb(from white r g b / 0.5)",
                transform: "scale(1.5, 1)",
                cursor: nextCharacterId ? "pointer" : "default",
              }}
              onClick={handleNext}
            >
              {"▶"}
            </span>
            <BoardContainer>
              <NameBoard
                name={data.name}
                enName={data.enName}
                color={data.colorPalette[0]}
              />
            </BoardContainer>
          </Header>
        </Container>
      )}
    </>
  );
};

export default CharacterAbout;
