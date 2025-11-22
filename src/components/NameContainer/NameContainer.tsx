import { CharacterName, Container, EnCharacterName } from "./styled";

export type NameContainerProps = {
  className?: string;
  size?: "lg" | "md" | "sm";
  name: string;
  enName: string;
};

export const NameContainer: React.FC<NameContainerProps> = ({
  className,
  size,
  name,
  enName,
}) => (
  <Container className={className}>
    <CharacterName size={size}>{name}</CharacterName>
    <EnCharacterName>{enName}</EnCharacterName>
  </Container>
);
