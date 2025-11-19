import React, { useMemo } from "react";
import {
  Bar,
  BoardContainer,
  CharacterName,
  EnCharacterName,
  NameContainer,
} from "./styled";

type NameBoardProps = {
  name: string;
  enName: string;
  color: string;
};

export const NameBoard: React.FC<NameBoardProps> = ({
  name,
  enName,
  color,
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
    <BoardContainer>
      <NameContainer>
        <CharacterName size={size}>{name}</CharacterName>
        <EnCharacterName>{enName}</EnCharacterName>
      </NameContainer>
      <Bar color={color} />
    </BoardContainer>
  );
};
