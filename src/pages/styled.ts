import styled from "@emotion/styled";
import { SP_MAX_WIDTH } from "../definitions";

export const SpMarginContainer = styled.div`
  width: 100%;
  max-width: ${SP_MAX_WIDTH}px;
  margin: auto;
  height: 100%;
`;

export const SpMarginContainerRelative = styled(SpMarginContainer)`
  position: relative;
`;
