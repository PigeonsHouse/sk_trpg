import { NameBoard } from "../NameBoard";
import { NameContainer } from "../NameContainer";
import { NavigateArrow } from "../NavigateArrow";
import {
  Container,
  NameBoardContainer,
  BottomArrowStyle,
  BottomNameStyle,
  BoardStyle,
} from "./styled";

type BottomNavigatorProps = {
  isSp?: boolean;
  color: string;
  handlePrevious?: () => void;
  handleNext?: () => void;
  handleAboutCharacters: () => void;
};

/**
 * キャラクターページのボトムナビゲーター
 */
export const BottomNavigator: React.FC<BottomNavigatorProps> = ({
  isSp,
  color,
  handlePrevious,
  handleNext,
  handleAboutCharacters,
}) => (
  <Container isSp={isSp}>
    <NavigateArrow
      arrowDirection="left"
      disabled={!handlePrevious}
      arrowHeight={isSp ? 40 : 64}
      mainColor={color}
      onClick={handlePrevious}
      className={BottomArrowStyle}
    >
      <NameContainer
        name="まえへ"
        enName="Previous Character"
        className={BottomNameStyle("left", isSp)}
        isSp={isSp}
      />
    </NavigateArrow>
    <NameBoardContainer onClick={handleAboutCharacters}>
      <NameBoard
        name="一覧に戻る"
        enName="GO TO CHARACTER LIST"
        color={color}
        className={BoardStyle(isSp)}
        isSp={isSp}
      />
    </NameBoardContainer>
    <NavigateArrow
      arrowDirection="right"
      arrowHeight={isSp ? 40 : 64}
      mainColor={color}
      onClick={handleNext}
      disabled={!handleNext}
      className={BottomArrowStyle}
    >
      <NameContainer
        name="つぎへ"
        enName="Next Character"
        className={BottomNameStyle("right", isSp)}
        isSp={isSp}
      />
    </NavigateArrow>
  </Container>
);
