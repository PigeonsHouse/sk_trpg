import { Container, ShortId, ShortIdNumber } from "./styled";

type ShortIdBoardProps = {
  className?: string;
  shortId: string;
  number: number;
  bgColor: string;
  isSp?: boolean;
};

export const ShortIdBoard: React.FC<ShortIdBoardProps> = ({
  className,
  shortId,
  number,
  bgColor,
  isSp,
}) => {
  return (
    <Container isSp={isSp} className={className} backgroundColor={bgColor}>
      <ShortId>{shortId}</ShortId>
      <ShortIdNumber>{`#${String(number).padStart(2, "0")}`}</ShortIdNumber>
    </Container>
  );
};
