import { useMemo } from "react";
import { NameBoard } from "../";
import {
  BoardContainer,
  CharacterName,
  EnCharacterName,
  Header,
  NameContainer,
} from "./styled";

type CharacterHeaderProps = {
  name: string;
  enName: string;
  color: string;
  isSmall?: boolean;
  handlePrevious?: () => void;
  handleNext?: () => void;
};

export const CharacterHeader: React.FC<CharacterHeaderProps> = ({
  name,
  enName,
  color,
  isSmall,
  handlePrevious,
  handleNext,
}) => {
  const size = useMemo(() => {
    if (name.length < 8) {
      return "lg";
    }
    if (name.length < 12) {
      return "md";
    }
    return "sm";
  }, [name]);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
      <Header color={color} isSmall={isSmall}>
        <BoardContainer isSmall={isSmall}>
          <NameBoard name={name} enName={enName} color={color} />
        </BoardContainer>
        <NameContainer isSmall={isSmall}>
          <CharacterName size={size}>{name}</CharacterName>
          <EnCharacterName>{enName}</EnCharacterName>
        </NameContainer>

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
              color: handlePrevious ? "white" : "rgb(from white r g b / 0.5)",
              cursor: handlePrevious ? "pointer" : "default",
              transform: "scale(1.7, 1)",
            }}
            onClick={handlePrevious}
          >
            {"◀"}
          </span>
          <span
            style={{
              fontSize: 60,
              color: handleNext ? "white" : "rgb(from white r g b / 0.5)",
              transform: "scale(1.7, 1)",
              cursor: handleNext ? "pointer" : "default",
            }}
            onClick={handleNext}
          >
            {"▶"}
          </span>
        </div>
      </Header>
    </div>
  );
};
