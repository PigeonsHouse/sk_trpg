import { useMemo } from "react";
import styled from "@emotion/styled";

type BrailleBlockProps = {
  className?: string;
  gap: number;
  blockColor: string;
  blockLength: number;
  orientation: "horizontal" | "vertical";
};

export const BrailleBlock: React.FC<BrailleBlockProps> = ({
  className,
  gap,
  blockColor,
  blockLength,
  orientation,
}) => {
  const isHorizontal = orientation === "horizontal";
  const shortLength = blockLength / 3 - gap;

  const Dom = useMemo(
    () => styled.div`
      position: absolute;
      ${isHorizontal ? "height" : "width"}: ${blockLength}px;
      background:
        repeating-linear-gradient(
          ${isHorizontal ? 90 : 180}deg,
          transparent,
          transparent ${blockLength - gap}px,
          white ${blockLength - gap}px,
          white ${blockLength}px
        ),
        linear-gradient(
          ${isHorizontal ? 0 : 90}deg,
          ${blockColor},
          ${blockColor} ${shortLength}px,
          white ${shortLength}px,
          white ${shortLength + gap}px,
          ${blockColor} ${shortLength + gap}px,
          ${blockColor} ${shortLength * 2 + gap}px,
          white ${shortLength * 2 + gap}px,
          white ${shortLength * 2 + gap * 2}px,
          ${blockColor} ${shortLength * 2 + gap * 2}px,
          ${blockColor} ${shortLength * 3 + gap * 2}px
        );
    `,
    [blockLength, blockColor]
  );
  return <Dom className={className} />;
};
