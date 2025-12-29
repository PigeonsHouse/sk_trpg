import { GoogleFontIcon } from "../../common";
import {
  Bar,
  Board,
  Container,
  EnLabel,
  IconStyle,
  Label,
  LabelContainer,
} from "./styled";

type HeadBoardProps = {
  label: string;
  enLabel: string;
};

export const HeadBoard: React.FC<HeadBoardProps> = ({ label, enLabel }) => {
  return (
    <Container>
      <Bar position="left" />
      <Bar position="right" />

      <Board>
        <GoogleFontIcon
          iconName="expand_circle_down"
          size={64}
          className={IconStyle}
        />

        <LabelContainer>
          <Label>{label}</Label>
          <EnLabel>{enLabel}</EnLabel>
        </LabelContainer>
      </Board>
    </Container>
  );
};
