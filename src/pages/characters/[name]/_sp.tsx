import type { CharacterDetail } from "../../../types";

type SpCharacterAboutProps = {
  characterId: string;
  data: CharacterDetail;
};

export const SpCharacterAbout: React.FC<SpCharacterAboutProps> = ({
  characterId,
  data,
}) => {
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
        <h1 style={{ margin: 0 }}>{data.name}</h1>
      </div>
    </div>
  );
};
