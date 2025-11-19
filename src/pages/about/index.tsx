import { useEffect, useState } from "react";
import { Anchor, TopGuideBoard } from "../../components";
import type { CharacterSummary } from "../../types";
import { Link } from "react-router";

const About = () => {
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  return (
    <>
      <title>このサイトは何？</title>
      <div>
        <div style={{ paddingTop: 200, position: "relative" }}>
          <div style={{ position: "fixed", left: 48 }}>
            <TopGuideBoard />
          </div>
          <div
            style={{
              marginLeft: 510,
              padding: "0 64px",
              textAlign: "center",
              marginBottom: 200,
            }}
          >
            <Anchor id="about" />
            <h2 style={{ fontSize: 80, marginTop: 0, letterSpacing: 4 }}>
              What is this?
            </h2>
            <h5 style={{ fontSize: 24, letterSpacing: 4, lineHeight: 2 }}>
              鈴木乖離という人間が
              <br />
              TRPGで生み出した探索者のまとめサイトです。
              <br />
              かわいいうちの子を見ていってください～！
            </h5>
            <Anchor id="characters" />
            <h2 style={{ fontSize: 80, letterSpacing: 4, color: "#444444" }}>
              CHARACTER
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 36,
              }}
            >
              {summary.map((character) => {
                return (
                  <div>
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
                          width: 400,
                          height: 300,
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
                          <span style={{ fontSize: 12 }}>
                            {character.enName}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <Anchor id="twitter" />
            <h2 style={{ fontSize: 80, letterSpacing: 4, color: "#444444" }}>
              X
            </h2>
            <a
              href="https://x.com/Suzuki_sepa"
              style={{
                display: "inline-block",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: 9999,
                width: 120,
                height: 120,
              }}
            >
              <img
                src="/logos/x-logo.svg"
                style={{ height: "100%", width: 80 }}
              />
            </a>
            <Anchor id="skeb" />
            <h2 style={{ fontSize: 80, letterSpacing: 4, color: "#444444" }}>
              Skeb
            </h2>
            <a href="https://skeb.jp/@Suzuki_sepa">
              <img width="120" src="/logos/skeb.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
