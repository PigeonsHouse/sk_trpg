import { calcNameSize } from "../../../utils";
import { MenuBoard, NameBoard, NavigateArrow } from "../../common";
import { Container, MenuBoardStyle, NameBoardStyle } from "./styled";

type SpCharacterHeaderProps = {
  className?: string;
  name: string;
  enName: string;
  mainColor: string;
  handlePrevious?: () => void;
  handleNext?: () => void;
  isBackdropOpen: boolean;
  onSwitchMenuOpen: (isOpen: boolean) => void;
};

/**
 * SP版のキャラクターヘッダー
 */
export const SpCharacterHeader: React.FC<SpCharacterHeaderProps> = ({
  className,
  name,
  enName,
  mainColor,
  handlePrevious,
  handleNext,
  isBackdropOpen,
  onSwitchMenuOpen,
}) => {
  return (
    <Container bgColor={mainColor} className={className}>
      <NavigateArrow
        arrowHeight={24}
        arrowDirection="left"
        disabled={!handlePrevious}
        onClick={handlePrevious}
      />
      <NameBoard
        isHeading
        name={name}
        enName={enName}
        color={mainColor}
        nameSize={calcNameSize(name)}
        className={NameBoardStyle}
        isSp
      />
      <NavigateArrow
        arrowHeight={24}
        arrowDirection="right"
        disabled={!handleNext}
        onClick={handleNext}
      />
      <MenuBoard
        isBackdropOpen={isBackdropOpen}
        setIsBackdropOpen={onSwitchMenuOpen}
        className={MenuBoardStyle}
        isSp
      />
    </Container>
  );
};
