import { HighLight, VerticalBar, WindowFrame } from "./styled";

type WindowProps = {
  className?: string;
  colorPalette: string[];
};

export const Window: React.FC<WindowProps> = ({ className, colorPalette }) => {
  const [mainColor, secondColor] = colorPalette;

  return (
    <WindowFrame
      className={className}
      mainColor={mainColor}
      secondColor={secondColor}
    >
      <HighLight />
      <VerticalBar />
    </WindowFrame>
  );
};
