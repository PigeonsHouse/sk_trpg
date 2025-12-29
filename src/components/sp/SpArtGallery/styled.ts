import styled from "@emotion/styled";
import { DropShadowFilter, FontFamily, FontWeight } from "../../../definitions";

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
  background-color: rgb(from black r g b / 0.8);
  z-index: 60;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "unset" : "none")};
  transition: opacity, 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TargetArt = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const CardCloseButton = styled.button<{ mainColor: string }>`
  position: absolute;
  padding: 0;
  border: none;
  background-color: ${(props) => props.mainColor};
  aspect-ratio: 1 / 1;
  width: 32px;
  border-radius: 50%;
  filter: ${DropShadowFilter};
  top: 16px;
  right: 16px;
  cursor: pointer;
  span {
    font-weight: ${FontWeight.Bold};
    vertical-align: middle;
  }
`;
