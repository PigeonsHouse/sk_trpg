import styled from "@emotion/styled";

export const Icon = styled.span<{ size: number; color?: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color || "inherit"};
`;
