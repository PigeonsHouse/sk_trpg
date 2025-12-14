import styled from "@emotion/styled";
import { UiColor } from "../../../definitions";

export const Container = styled.div<{ isSp?: boolean }>`
  background-color: ${UiColor.darkGray};
  border-radius: ${(props) =>
    props.isSp ? "16px 16px 50% 50%" : "32px 32px 50% 50%"};
  width: ${(props) => (props.isSp ? 75 : 178)}px;
  height: ${(props) => (props.isSp ? 75 : 178)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Light = styled.div<{ lightColor: string; isSp?: boolean }>`
  width: ${(props) => (props.isSp ? 45 : 110)}px;
  height: ${(props) => (props.isSp ? 45 : 110)}px;
  border-style: solid;
  border-color: ${UiColor.black};
  border-width: ${(props) => (props.isSp ? 5 : 12)}px;
  background-color: ${(props) => props.lightColor};
  border-radius: 50%;
`;
