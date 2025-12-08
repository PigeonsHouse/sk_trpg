import { useCallback, useState } from "react";
import { GoogleFontIcon } from "../GoogleFontIcon";
import { TopGuideBoard } from "../TopGuideBoard";
import {
  Bar,
  Board,
  BoardContainer,
  Container,
  IconStyle,
  MenuContainer,
  Text,
} from "./styled";

type MenuBoardProps = {
  className?: string;
  isHide?: boolean;
};

export const MenuBoard: React.FC<MenuBoardProps> = ({ className, isHide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSwitchMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return (
    <Container className={className}>
      <BoardContainer isHide={isHide}>
        <Board onClick={onSwitchMenu}>
          <GoogleFontIcon
            iconName="arrow_back"
            size={88}
            className={IconStyle(isOpen)}
          />
          <Text>MENU</Text>
        </Board>
        <Bar position="left" />
        <Bar position="right" />
        <MenuContainer isOpen={isOpen}>
          <TopGuideBoard />
        </MenuContainer>
      </BoardContainer>
    </Container>
  );
};
