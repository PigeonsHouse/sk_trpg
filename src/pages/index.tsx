import { useEffect, useState } from "react";
import { TopGuideBoard } from "../components";
import type { CharacterSummary } from "../types";
import { Link } from "react-router";

const Top = () => {
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundImage:
            "repeating-linear-gradient(90deg, #ccc,#ccc 2px,transparent 1px,transparent 440px)",
        }}
      />
      <div
        style={{
          display: "flex",
          paddingTop: 200,
          paddingLeft: 48,
          gap: 40,
        }}
      >
        <TopGuideBoard />
        {summary.map((character) => {
          return (
            <div key={character.id}>
              <Link
                to={`/characters/${character.id}`}
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: 16 / 9,
                    height: 560,
                    boxShadow: "0 4px 20px #666",
                    borderRadius: 4,
                    overflow: "hidden",
                    // backgroundColor: `rgb(from ${character.color} r g b / 0.3)`,
                    backgroundImage: `url(${character.backgroundUrl})`,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: character.color,
                      opacity: 0.3,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                    }}
                  >
                    <img
                      src={character.thumbnailUrl}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        objectPosition: "top",
                        transform: "scale(1.2)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: 24,
                      width: "100%",
                      padding: "16px 24px",
                      boxSizing: "border-box",
                      background: "linear-gradient(transparent, white)",
                    }}
                  >
                    {character.name}{" "}
                    <span style={{ fontSize: 12 }}>{character.enName}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        <div style={{ width: 200, flexShrink: 0 }} />
      </div>
    </div>
  );
};

export default Top;
