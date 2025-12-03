import styled from "@emotion/styled";

export const LabelBox = styled.div<{ backgroundColor: string }>`
  width: 100px;
  height: 36px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
`;
