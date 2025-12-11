import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../definitions";

export const Container = styled.div<{
  backgroundColor: string;
  isSp?: boolean;
}>`
  background-color: ${(props) => props.backgroundColor};
  font-family: ${FontFamily.Header};
  font-weight: ${FontWeight.Bold};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: ${(props) => (props.isSp ? 177 : 260)}px;
  height: ${(props) => (props.isSp ? 116 : 160)}px;
  font-size: ${(props) => (props.isSp ? 32 : 50)}px;
  gap: ${(props) => (props.isSp ? 16 : 24)}px;
`;

export const ShortId = styled.span``;
export const ShortIdNumber = styled.span``;
