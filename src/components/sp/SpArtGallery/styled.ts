import styled from "@emotion/styled";
import { FontFamily } from "../../../definitions";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  text-align: center;
`;

export const Backdrop = styled.div<{ isOpen?: boolean }>`
  inset: 0;
  position: fixed;
  background-color: rgb(from black r g b / 0.75);
  z-index: 60;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "unset" : "none")};
  transition: opacity, 0.2s;
  padding: 16px;
  display: flex;
`;

export const TargetArt = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
