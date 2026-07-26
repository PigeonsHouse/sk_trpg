import styled from "@emotion/styled";

export const StationSpritesContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 30;
`;

export const StationSpriteImage = styled.img<{
  left: number;
  bottom: number;
  height: number;
}>`
  position: absolute;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  height: ${(props) => props.height}px;
  width: auto;
`;
