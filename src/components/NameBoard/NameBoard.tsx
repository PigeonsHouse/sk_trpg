import React from "react";
import { NameContainer } from "../";
import { Bar, BoardContainer, NameContainerStyle } from "./styled";

type NameBoardProps = {
  className?: string;
  name: string;
  enName: string;
  nameSize?: "lg" | "md" | "sm";
  color: string;
  isHeading?: boolean;
};

export const NameBoard: React.FC<NameBoardProps> = ({
  className,
  name,
  enName,
  nameSize,
  color,
  isHeading,
}) => (
  <BoardContainer className={className}>
    <NameContainer
      name={name}
      enName={enName}
      size={nameSize}
      className={NameContainerStyle(nameSize)}
      isHeading={isHeading}
    />
    <Bar mainColor={color} />
  </BoardContainer>
);
