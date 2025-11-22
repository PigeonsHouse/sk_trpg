import styled from "@emotion/styled";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Header = styled.div<{ color: string; isSmall?: boolean }>`
  background-color: ${(props) => props.color};
  position: relative;
  height: ${(props) => (props.isSmall ? 120 : 200)}px;
  transition: height 0.2s;
`;

export const BoardContainer = styled.div<{ isSmall?: boolean }>`
  position: absolute;
  top: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.isSmall ? 0 : 1)};
  transition: opacity 0.2s;
`;

export const NameContainer = styled.div<{ isSmall?: boolean }>`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.isSmall ? 1 : 0)};
`;

export const CharacterName = styled.span<{ size?: "sm" | "md" | "lg" }>`
  line-height: 72px;
  font-weight: 500;
  font-family: YuGothic;
  white-space: nowrap;
  font-size: ${(props) =>
    props.size === "md" ? 44 : props.size === "sm" ? 40 : 56}px;
  letter-spacing: ${(props) =>
    props.size === "md" ? -8 : props.size === "sm" ? -6 : 4}px;
  color: white;
`;

export const EnCharacterName = styled.span`
  font-size: 12px;
  font-family: Impact;
  letter-spacing: 1px;
  color: white;
`;

export const ArrowContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 920px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
