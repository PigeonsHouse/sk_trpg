import { NameBoard, NameContainer, NavigateArrow } from "../";
import {
  Container,
  NameBoardContainer,
  BottomArrowStyle,
  BottomNameStyle,
  BoardStyle,
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
      arrowDirection="left"
      disabled={!handlePrevious}
      arrowHeight={64}
      mainColor={color}
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
        className={BoardStyle}
      />
    </NameBoardContainer>
    <NavigateArrow
      arrowDirection="right"
      arrowHeight={64}
      mainColor={color}
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
