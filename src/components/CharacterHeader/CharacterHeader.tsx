import { useMemo } from "react";
import { NameBoard } from "../";
import {
  ArrowContainer,
  BoardContainer,
  CharacterName,
  Container,
  DesignedArrow,
  EnCharacterName,
  Header,
  NameContainer,
} from "./styled";

type CharacterHeaderProps = {
  className?: string;
  name: string;
  enName: string;
  color: string;
  isSmall?: boolean;
  handlePrevious?: () => void;
  handleNext?: () => void;
};

export const CharacterHeader: React.FC<CharacterHeaderProps> = ({
  className,
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
    <Container className={className}>
      <Header color={color} isSmall={isSmall}>
        <BoardContainer isSmall={isSmall}>
          <NameBoard name={name} enName={enName} color={color} />
        </BoardContainer>
        <NameContainer isSmall={isSmall}>
          <CharacterName size={size}>{name}</CharacterName>
          <EnCharacterName>{enName}</EnCharacterName>
        </NameContainer>
        <ArrowContainer>
          <DesignedArrow isActive={!!handlePrevious} onClick={handlePrevious}>
            ◀
          </DesignedArrow>
          <DesignedArrow isActive={!!handleNext} onClick={handleNext}>
            ▶
          </DesignedArrow>
        </ArrowContainer>
      </Header>
    </Container>
  );
};
