import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { Container } from "./styled";
import { CharacterHeader } from "../../../components";

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

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const callback = () => {
      setIsScroll(window.scrollY !== 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  });

  return (
    <>
      <title>{title}</title>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
            fontSize: 40,
          }}
        >
          isLoading...
        </div>
      ) : (
        <Container>
          <div
            style={{ position: "fixed", left: 0, right: 0, top: 0, zIndex: 10 }}
          >
            <CharacterHeader
              name={data.name}
              enName={data.enName}
              color={data.colorPalette[0]}
              isSmall={isScroll}
              handlePrevious={previousCharacterId ? handlePrevious : undefined}
              handleNext={nextCharacterId ? handleNext : undefined}
            />
          </div>
          <div style={{ width: "100%", height: "620px", position: "relative" }}>
            <img
              src={data.backgroundUrl}
              style={{
                position: "absolute",
                objectFit: "cover",
                width: "100%",
                height: "calc(100% + 80px)",
                zIndex: "-1",
                transform: "translateY(-80px)",
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
          <div style={{ height: 4000 }} />
        </Container>
      )}
    </>
  );
};

export default CharacterAbout;
