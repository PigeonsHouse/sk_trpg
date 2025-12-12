import { useCallback } from "react";
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
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const MenuBoard: React.FC<MenuBoardProps> = ({
  className,
  isHide,
  isSp,
  isOpen,
  setIsOpen,
}) => {
  const onSwitchMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <Container className={className}>
      <BoardContainer isHide={isHide} isSp={isSp}>
        <Board isSp={isSp} onClick={onSwitchMenu}>
          <GoogleFontIcon
            iconName="arrow_back"
            size={isSp ? 56 : 88}
            className={IconStyle(isOpen, isSp)}
          />
          <Text isSp={isSp}>MENU</Text>
        </Board>
        <Bar isSp={isSp} position="left" />
        <Bar isSp={isSp} position="right" />
        <MenuContainer isOpen={isOpen} isSp={isSp}>
          <TopGuideBoard isSp={isSp} />
        </MenuContainer>
      </BoardContainer>
    </Container>
  );
};
