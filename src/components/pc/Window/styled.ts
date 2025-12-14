import styled from "@emotion/styled";
import { UiColor } from "../../../definitions";

export const WindowFrame = styled.div<{
  mainColor: string;
  secondColor: string;
}>`
  position: absolute;
  width: 720px;
  height: 360px;
  border: 40px solid ${UiColor.lightGray};
  border-radius: 60px;
  background: linear-gradient(
    135deg,
    ${(props) => props.mainColor},
    ${(props) => props.secondColor}
  );
  overflow: hidden;
`;

export const HighLight = styled.div`
  position: absolute;
  bottom: 250px;
  height: 300px;
  width: 100%;
  background-color: rgb(255 255 255 / 0.25);
  transform: rotate(12.5deg) scaleX(2);
`;

export const VerticalBar = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 20px);
  width: 40px;
  bottom: 0;
  background-color: ${UiColor.lightGray};
`;
