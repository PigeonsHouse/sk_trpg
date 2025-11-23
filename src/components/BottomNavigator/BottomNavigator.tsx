import { NameBoard, NameContainer, NavigateArrow } from "../";
import {
  Container,
  NameBoardContainer,
  BottomArrowStyle,
  BottomNameStyle,
} from "./styled";

type BottomNavigatorProps = {
  color: string;
  handlePrevious?: () => void;
  handleNext?: () => void;
  handleAboutCharacters: () => void;
};

export const BottomNavigator: React.FC<BottomNavigatorProps> = ({
  color,
  handlePrevious,
  handleNext,
  handleAboutCharacters,
}) => (
  <Container>
    <NavigateArrow
      direction="left"
      disabled={!handlePrevious}
      height={80}
      color={color}
      onClick={handlePrevious}
      className={BottomArrowStyle}
    >
      <NameContainer
        name="まえへ"
        enName="Previous Character"
        className={BottomNameStyle("left")}
      />
    </NavigateArrow>
    <NameBoardContainer onClick={handleAboutCharacters}>
      <NameBoard
        name="一覧に戻る"
        enName="GO TO CHARACTER LIST"
        color={color}
      />
    </NameBoardContainer>
    <NavigateArrow
      direction="right"
      height={80}
      color={color}
      onClick={handleNext}
      disabled={!handleNext}
      className={BottomArrowStyle}
    >
      <NameContainer
        name="つぎへ"
        enName="Next Character"
        className={BottomNameStyle("right")}
      />
    </NavigateArrow>
  </Container>
);
