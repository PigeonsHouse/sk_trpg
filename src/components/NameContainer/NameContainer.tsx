import { CharacterName, Container, EnCharacterName } from "./styled";

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
  return (
    <Container className={className} as={isHeading ? "h1" : undefined}>
      <CharacterName size={size}>{name}</CharacterName>
      <EnCharacterName>{enName.toUpperCase()}</EnCharacterName>
    </Container>
  );
};
