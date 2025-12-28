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
  isSp,
  isBackdropOpen,
  setIsBackdropOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenWithBackdrop = useMemo(() => {
    if (isBackdropOpen !== undefined) {
      return isOpen && isBackdropOpen;
    } else {
      return isOpen;
    }
  }, [isOpen, isBackdropOpen]);
  const onSwitchMenu = useCallback(() => {
    setIsOpen(!isOpenWithBackdrop);
    if (setIsBackdropOpen) {
      setIsBackdropOpen(!isOpenWithBackdrop);
    }
  }, [isOpenWithBackdrop, setIsBackdropOpen]);

  return (
    <Container className={className}>
      <BoardContainer isHide={isHide} isSp={isSp}>
        <Bar isSp={isSp} position="left" />
        <Bar isSp={isSp} position="right" />
        <Board isHide={isHide} isSp={isSp} onClick={onSwitchMenu}>
          <GoogleFontIcon
            iconName="arrow_back"
            size={isSp ? 56 : 88}
            className={IconStyle(isOpenWithBackdrop, isSp)}
          />
          <Text isSp={isSp}>MENU</Text>
        </Board>

        <MenuContainer isOpen={isOpenWithBackdrop} isSp={isSp}>
          <TopGuideBoard isSp={isSp} />
        </MenuContainer>
      </BoardContainer>
    </Container>
  );
};
