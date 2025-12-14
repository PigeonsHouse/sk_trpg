import { Container } from "./styled";

type CommonFrameProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * サイト全体で利用するベースのフレーム
 */
export const CommonFrame: React.FC<CommonFrameProps> = ({
  className,
  children,
}) => <Container className={className}>{children}</Container>;
