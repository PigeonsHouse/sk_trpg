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
  isSp?: boolean;
};

export const MenuBoard: React.FC<MenuBoardProps> = ({
  className,
  isHide,
  isSp,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSwitchMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return (
    <Container className={className}>
      <BoardContainer isHide={isHide}>
        <Board isSp={isSp} onClick={onSwitchMenu}>
          <GoogleFontIcon
            iconName="arrow_back"
            size={isSp ? 56 : 88}
            className={IconStyle(isOpen)}
          />
          <Text isSp={isSp}>MENU</Text>
        </Board>
        <Bar position="left" />
        <Bar position="right" />
        <MenuContainer isOpen={isOpen} isSp={isSp}>
          <TopGuideBoard isSp={isSp} />
        </MenuContainer>
      </BoardContainer>
    </Container>
  );
};
