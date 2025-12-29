import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../../definitions";

export const Container = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Circle = styled.div<{ radius: number }>`
  width: ${(props) => props.radius}px;
  height: ${(props) => props.radius}px;
  border-radius: 50%;
  background-color: black;
`;

export const LogoImage = styled.img<{ withPadding: boolean }>`
  display: block;
  object-fit: contain;
  margin: auto;
  width: ${(props) => (props.withPadding ? "50%" : "100%")};
  height: ${(props) => (props.withPadding ? "50%" : "100%")};
  margin-top: ${(props) => (props.withPadding ? "25%" : "0")};
`;

export const Label = styled.span`
  font-family: ${FontFamily.Header};
  font-size: 32px;
  font-weight: ${FontWeight.Bold};
`;
