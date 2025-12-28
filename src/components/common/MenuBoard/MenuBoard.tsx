import { useCallback, useMemo, useState } from "react";
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
  disabled?: boolean;
  isBackdropOpen?: boolean;
  setIsBackdropOpen?: (open: boolean) => void;
};

/**
 * TopGuideBoardを出し隠しするボード
 * ヘッダーなどに吊るされてるやつ
 */
export const MenuBoard: React.FC<MenuBoardProps> = ({
  className,
  isHide,
  disabled,
  isSp,
  isBackdropOpen,
  setIsBackdropOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenWithBackdrop = useMemo(() => {
    if (isBackdropOpen !== undefined) {
      return isOpen && isBackdropOpen && !disabled;
    } else {
      return isOpen && !disabled;
    }
  }, [isOpen, isBackdropOpen, disabled]);
  const onSwitchMenu = useCallback(() => {
    setIsOpen(!isOpenWithBackdrop);
    if (setIsBackdropOpen) {
      setIsBackdropOpen(!isOpenWithBackdrop);
    }
  }, [isOpenWithBackdrop, setIsBackdropOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
    if (setIsBackdropOpen) {
      setIsBackdropOpen(false);
    }
  }, [setIsOpen, setIsBackdropOpen]);

  return (
    <Container className={className}>
      <BoardContainer isHide={isHide} isSp={isSp}>
        <Bar isSp={isSp} position="left" />
        <Bar isSp={isSp} position="right" />
        <Board
          isHide={isHide}
          isSp={isSp}
          disabled={disabled}
          onClick={onSwitchMenu}
        >
          <GoogleFontIcon
            iconName="arrow_back"
            size={isSp ? 56 : 88}
            className={IconStyle(isOpenWithBackdrop, isSp)}
          />
          <Text isSp={isSp}>MENU</Text>
        </Board>

        <MenuContainer isOpen={isOpenWithBackdrop} isSp={isSp}>
          <TopGuideBoard isSp={isSp} onClick={onClose} />
        </MenuContainer>
      </BoardContainer>
    </Container>
  );
};
