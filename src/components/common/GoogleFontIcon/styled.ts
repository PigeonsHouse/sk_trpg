import styled from "@emotion/styled";

export const Icon = styled.span<{
  rectSize: number;
  iconColor?: string;
  fill?: boolean;
}>`
  width: ${(props) => props.rectSize}px;
  height: ${(props) => props.rectSize}px;
  font-size: ${(props) => props.rectSize}px;
  color: ${(props) => props.iconColor || "inherit"};
  overflow: clip;
  font-variation-settings: "FILL" ${(props) => (props.fill ? 1 : 0)};
  user-select: none;
`;
