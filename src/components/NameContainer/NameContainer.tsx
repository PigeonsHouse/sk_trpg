import {
  CharacterName,
  Container,
  ContainerH1,
  EnCharacterName,
} from "./styled";

export type NameContainerProps = {
  className?: string;
  size?: "lg" | "md" | "sm";
  name: string;
  enName: string;
  isHeading?: boolean;
};

export const NameContainer: React.FC<NameContainerProps> = ({
  className,
  size,
  name,
  enName,
  isHeading,
}) => {
  const SpecifiedContainer = isHeading ? ContainerH1 : Container;

  return (
    <SpecifiedContainer className={className}>
      <CharacterName size={size}>{name}</CharacterName>
      <EnCharacterName>{enName}</EnCharacterName>
    </SpecifiedContainer>
  );
};
