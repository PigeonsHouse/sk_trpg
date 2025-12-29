import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { TopGuideBoard } from "../components";
import type { CharacterSummary } from "../types";

export const PcTop = () => {
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  const onScroll = useCallback((e: React.WheelEvent) => {
    e.currentTarget.scrollLeft += e.deltaY;
  }, []);

  return (
    <>
      <div
        style={{ position: "relative", overflowX: "auto", height: "100dvh" }}
        onWheel={onScroll}
      >
        <div
          style={{
            display: "flex",
            minWidth: "fit-content",
            height: "100%",
            backgroundImage: `repeating-linear-gradient(90deg, #ccc,#ccc 2px,transparent 1px,transparent 440px),
            linear-gradient(0deg, transparent, transparent 150px, #ccc 151px, #ccc 151px, transparent 152px),
            linear-gradient(0deg, transparent, transparent 340px, #ccc 341px, #ccc 341px, transparent 342px)`,
          }}
        >
          <div
            style={{
              display: "flex",
              paddingTop: 200,
              paddingLeft: 48,
              gap: 40,
              alignItems: "flex-start",
            }}
          >
            <TopGuideBoard />
            {summary
              .filter((character) => !character.original)
              .map((character, i) => {
                return (
                  !character.original && (
                    <div
                      key={character.id}
                      style={
                        i === summary.length - 1
                          ? {
                              marginRight: 320,
                            }
                          : {}
                      }
                    >
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
                            aspectRatio: 1.414 / 1,
                            height: 560,
                            boxShadow: "0 4px 20px #666",
                            borderRadius: 4,
                            overflow: "hidden",
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
                  )
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
