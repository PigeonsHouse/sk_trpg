import { Container } from "./styled";

type CommonFrameProps = {
  className?: string;
  children: React.ReactNode;
};

export const CommonFrame: React.FC<CommonFrameProps> = ({
  className,
  children,
}) => {
  return <Container className={className}>{children}</Container>;
};
