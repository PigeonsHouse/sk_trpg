import { useMemo } from "react";
import { Carousel } from "../../common";
import { Container, Title } from "./styled";

type SpArtGalleryProps = {
  artGallery: string[];
  mainColor: string;
};

export const SpArtGallery: React.FC<SpArtGalleryProps> = ({
  artGallery,
  mainColor,
}) => {
  const carouselItems = useMemo(() => {
    return artGallery.map((url) => ({
      imageUrl: url,
    }));
  }, [artGallery]);

  return artGallery.length > 0 ? (
    <Container>
      <Title>アートギャラリー</Title>
      <Carousel carouselItems={carouselItems} mainColor={mainColor} />
    </Container>
  ) : null;
};
