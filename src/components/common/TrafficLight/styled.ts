import styled from "@emotion/styled";
import { UiColor } from "../../../definitions";

export const Container = styled.div<{ isSp?: boolean }>`
  width: ${(props) => (props.isSp ? 88 : 200)}px;
  height: ${(props) => (props.isSp ? 188 : 400)}px;
  background-color: ${UiColor.darkGray};
  border-radius: 9999px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.isSp ? 6 : 12)}px;
`;

export const Light = styled.div<{ lightColor: string; isSp?: boolean }>`
  width: ${(props) => (props.isSp ? 32 : 70)}px;
  height: ${(props) => (props.isSp ? 32 : 70)}px;
  border-radius: 50%;
  background-color: ${(props) => props.lightColor};
`;
