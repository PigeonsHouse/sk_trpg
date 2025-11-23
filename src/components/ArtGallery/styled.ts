import styled from "@emotion/styled";
import { BREAK_POINT } from "../../definitions";

export const Container = styled.div``;

export const Title = styled.h2`
  margin: 0;
  font-size: 64px;
  margin-bottom: 80px;
  text-align: center;
`;

export const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 240px;

  & > :nth-of-type(even) {
    justify-content: flex-start;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: 480px;
  max-width: ${BREAK_POINT}px;
  object-fit: contain;
`;
