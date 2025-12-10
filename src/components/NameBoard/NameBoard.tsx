import React from "react";
import { NameContainer } from "../NameContainer";
import { Bar, BoardContainer, NameContainerStyle } from "./styled";

type NameBoardProps = {
  className?: string;
  name: string;
  enName: string;
  nameSize?: "lg" | "md" | "sm";
  color: string;
  isHeading?: boolean;
  isSp?: boolean;
};

export const NameBoard: React.FC<NameBoardProps> = ({
  className,
  name,
  enName,
  nameSize,
  color,
  isHeading,
  isSp,
}) => (
  <BoardContainer isSp={isSp} className={className}>
    <NameContainer
      name={name}
      enName={enName}
      size={nameSize}
      className={NameContainerStyle(nameSize, isSp)}
      isHeading={isHeading}
      isSp={isSp}
    />
    <Bar isSp={isSp} mainColor={color} />
  </BoardContainer>
);
