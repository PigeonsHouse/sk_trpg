import { useEffect, useState } from "react";
import type { CharacterSummary } from "../../types";

const Characters = () => {
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  return (
    <>
      <title>キャラクター</title>
      <div>
        {summary.map((data) => {
          return (
            <div>
              <a
                href={`/characters/${data.id}`}
                style={{ display: "inline-block", textDecoration: "none" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 400,
                    height: 300,
                    boxShadow: "0 4px 20px #666",
                    borderRadius: 4,
                    overflow: "hidden",
                    // backgroundColor: `rgb(from ${data.color} r g b / 0.3)`,
                    backgroundImage: `url(${data.backgroundUrl})`,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: data.color,
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
                      src={data.thumbnailUrl}
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
                    {data.name}{" "}
                    <span style={{ fontSize: 12 }}>{data.enName}</span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
