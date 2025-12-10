import { Container, Light } from "./styled";

type SingleLightProps = {
  className?: string;
  lightColor: string;
  isSp?: boolean;
};

export const SingleLight: React.FC<SingleLightProps> = ({
  className,
  lightColor,
  isSp,
}) => {
  return (
    <Container isSp={isSp} className={className}>
      <Light isSp={isSp} lightColor={lightColor} />
    </Container>
  );
};
