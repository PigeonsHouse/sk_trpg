import { Container, Light } from "./styled";

type TrafficLightProps = {
  className?: string;
  colorPalette: string[];
  isSp?: boolean;
};

/**
 * カラーパレットを表示する縦の信号機
 */
export const TrafficLight: React.FC<TrafficLightProps> = ({
  className,
  colorPalette,
  isSp,
}) => {
  return (
    <Container className={className} isSp={isSp}>
      {colorPalette.map((color, i) => (
        <Light key={i} lightColor={color} isSp={isSp} />
      ))}
    </Container>
  );
};
