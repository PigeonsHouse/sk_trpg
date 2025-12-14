import { CharacterName, Container, EnCharacterName } from "./styled";

export type NameContainerProps = {
  className?: string;
  size?: "lg" | "md" | "sm";
  name: string;
  enName: string;
  isHeading?: boolean;
  isSp?: boolean;
};

/**
 * 大文字日本語と小さい英語のセット
 * 名前表示などにも使用する
 */
export const NameContainer: React.FC<NameContainerProps> = ({
  className,
  size,
  name,
  enName,
  isHeading,
  isSp,
}) => {
  return (
    <Container className={className} as={isHeading ? "h1" : undefined}>
      <CharacterName isSp={isSp} size={size}>
        {name}
      </CharacterName>
      <EnCharacterName>{enName.toUpperCase()}</EnCharacterName>
    </Container>
  );
};
