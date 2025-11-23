import styled from "@emotion/styled";
import { BREAK_POINT, size } from "../../definitions";

export const Container = styled.div``;

export const Title = styled.h2`
  margin: 0;
  font-size: ${size.x8}px;
  margin-bottom: ${size.x10}px;
  text-align: center;
`;

export const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${size.x10}px;
  padding-bottom: ${size.x30}px;

  & > :nth-of-type(even) {
    justify-content: flex-start;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: ${size.x60}px;
  max-width: ${BREAK_POINT}px;
  object-fit: contain;
`;
