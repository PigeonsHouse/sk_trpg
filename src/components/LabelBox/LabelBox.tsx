import styled from "@emotion/styled";

export const LabelBox = styled.div<{ color: string }>`
  width: 100px;
  height: 36px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
`;
