import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../../definitions";

export const Container = styled.div`
  margin-left: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 44px;
  font-weight: ${FontWeight.Bold};
  font-family: ${FontFamily.Header};
  line-height: 1;
  font-size: 24px;
`;
