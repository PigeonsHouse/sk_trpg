import React from "react";
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
  return (
    <BoardContainer>
      <NameContainer>
        <CharacterName>{name}</CharacterName>
        <EnCharacterName>{enName}</EnCharacterName>
      </NameContainer>
      <Bar color={color} />
    </BoardContainer>
  );
};
