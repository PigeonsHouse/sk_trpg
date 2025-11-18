import styled from "@emotion/styled";

export const Container = styled.div``;

export const Header = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 200px;
  position: relative;
`;

export const BoardContainer = styled.div`
  position: absolute;
  top: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
`;
