import { useMemo } from "react";
import { calcNameSize } from "../../../utils";
import {
  MenuBoard,
  NameBoard,
  NameContainer,
  NavigateArrow,
} from "../../common";
import {
  BoardContainer,
  BoardStyle,
  Container,
  Header,
  MenuBoardStyle,
  SmallNameContainerStyle,
} from "./styled";

type CharacterHeaderProps = {
  className?: string;
  name: string;
  enName: string;
  color: string;
  isShrink?: boolean;
  isShowMenu?: boolean;
  handlePrevious?: () => void;
  handleNext?: () => void;
};

/**
 * PC版のキャラクターページのヘッダー
 */
export const CharacterHeader: React.FC<CharacterHeaderProps> = ({
  className,
  name,
  enName,
  color,
  isShrink,
  isShowMenu,
  handlePrevious,
  handleNext,
}) => {
  const nameSize = useMemo(() => calcNameSize(name), [name]);

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
        <MenuBoard className={MenuBoardStyle} isHide={!isShowMenu} />
      </Header>
    </Container>
  );
};
