import {
  ArtContainer,
  Container,
  Image,
  ImageContainer,
  Title,
} from "./styled";

export type ArtGalleryProps = {
  artGallery: string[];
};

/**
 * PC版のアートギャラリーエリア
 */
export const ArtGallery: React.FC<ArtGalleryProps> = ({ artGallery }) => {
  return (
    <Container>
      <Title>アートギャラリー</Title>
      <ArtContainer>
        {artGallery.map((artImage, i) => (
          <ImageContainer key={i}>
            <Image src={artImage} />
          </ImageContainer>
        ))}
      </ArtContainer>
    </Container>
  );
};
