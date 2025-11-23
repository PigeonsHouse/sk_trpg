import { useMemo } from "react";
import { NameBoard, NameContainer, NavigateArrow } from "../";
import {
  ArrowContainer,
  BoardContainer,
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
      <Header color={color} isShrink={isShrink}>
        <BoardContainer isShrink={isShrink}>
          <NameBoard
            name={name}
            enName={enName}
            color={color}
            nameSize={nameSize}
          />
        </BoardContainer>
        <NameContainer
          name={name}
          enName={enName}
          size={nameSize}
          className={SmallNameContainerStyle(isShrink)}
        />
        <ArrowContainer>
          <NavigateArrow
            direction="left"
            height={64}
            disabled={!handlePrevious}
            onClick={handlePrevious}
          />
          <NavigateArrow
            direction="right"
            height={64}
            disabled={!handleNext}
            onClick={handleNext}
          />
        </ArrowContainer>
      </Header>
    </Container>
  );
};
