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
            <BoardContainer>
              <NameBoard
                name={data.name}
                enName={data.enName}
                color={data.colorPalette[0]}
              />
            </BoardContainer>
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 920,
              }}
            >
              <span
                style={{
                  fontSize: 60,
                  color: previousCharacterId
                    ? "white"
                    : "rgb(from white r g b / 0.5)",
                  cursor: previousCharacterId ? "pointer" : "default",
                  transform: "scale(1.7, 1)",
                }}
                onClick={handlePrevious}
              >
                {"◀"}
              </span>
              <span
                style={{
                  fontSize: 60,
                  color: nextCharacterId
                    ? "white"
                    : "rgb(from white r g b / 0.5)",
                  transform: "scale(1.7, 1)",
                  cursor: nextCharacterId ? "pointer" : "default",
                }}
                onClick={handleNext}
              >
                {"▶"}
              </span>
            </div>
          </Header>
          <div style={{ width: "100%", height: "620px", position: "relative" }}>
            <img
              src={data.backgroundUrl}
              style={{
                position: "absolute",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                zIndex: "-1",
              }}
            />
            <div
              style={{
                maxWidth: "1200px",
                height: "100%",
                margin: "auto",
                display: "flex",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  border: "10px solid #707070",
                  borderRadius: "20px",
                  width: 608,
                  height: 320,
                  marginTop: 108,
                  padding: 54,
                }}
              >
                <h3 style={{ margin: 0, fontSize: "48px", lineHeight: 0.8 }}>
                  プロフィール
                </h3>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      paddingTop: 40,
                      paddingRight: 40,
                      lineHeight: 1.8,
                      whiteSpace: "pre-wrap",
                      fontSize: 12,
                    }}
                  >
                    {data.profile.description}
                  </div>
                  <div
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      gap: 4,
                      flexDirection: "column",
                      fontFamily: "'Noto Sans JP'",
                      fontWeight: 300,
                    }}
                  >
                    {Object.entries(data.profile).map(([key, profileData]) => {
                      return (
                        key !== "description" && (
                          <div
                            key={key}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              fontSize: 18,
                            }}
                          >
                            <div
                              style={{
                                width: 100,
                                height: 36,
                                backgroundColor: data.colorPalette[0],
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontSize: 12,
                              }}
                            >
                              {key.toUpperCase()}
                            </div>
                            {profileData}
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
              <img
                style={{
                  position: "absolute",
                  bottom: -160,
                  height: "130%",
                  right: 0,
                  zIndex: 1000,
                }}
                src={data.spritesUrl[0]}
              />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default CharacterAbout;
