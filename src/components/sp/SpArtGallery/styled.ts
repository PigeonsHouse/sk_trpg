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
