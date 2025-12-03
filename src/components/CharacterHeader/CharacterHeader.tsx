import { useMemo } from "react";
import { NameBoard, NameContainer, NavigateArrow } from "../";
import {
  BoardContainer,
  BoardStyle,
  Container,
  Header,
  SmallNameContainerStyle,
} from "./styled";

type CharacterHeaderProps = {
  className?: string;
  name: string;
  enName: string;
  color: string;
  isShrink?: boolean;
  handlePrevious?: () => void;
  handleNext?: () => void;
};

export const CharacterHeader: React.FC<CharacterHeaderProps> = ({
  className,
  name,
  enName,
  color,
  isShrink,
  handlePrevious,
  handleNext,
}) => {
  const nameSize = useMemo(() => {
    if (name.length < 8) {
      return "lg";
    } else if (name.length < 12) {
      return "md";
    } else {
      return "sm";
    }
  }, [name]);

  return (
    <Container className={className}>
      <Header mainColor={color} isShrink={isShrink}>
        <BoardContainer isShrink={isShrink}>
          <NavigateArrow
            arrowDirection="left"
            arrowHeight={64}
            disabled={!handlePrevious}
            onClick={handlePrevious}
          />
          <NameBoard
            name={name}
            enName={enName}
            color={color}
            nameSize={nameSize}
            className={BoardStyle(isShrink)}
            isHeading
          />
          <NameContainer
            name={name}
            enName={enName}
            size={nameSize}
            className={SmallNameContainerStyle(isShrink)}
          />
          <NavigateArrow
            arrowDirection="right"
            arrowHeight={64}
            disabled={!handleNext}
            onClick={handleNext}
          />
        </BoardContainer>
      </Header>
    </Container>
  );
};
