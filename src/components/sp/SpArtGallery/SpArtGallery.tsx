import { useCallback, useMemo, useState } from "react";
import { Carousel, GoogleFontIcon } from "../../common";
import {
  Backdrop,
  CardCloseButton,
  Container,
  TargetArt,
  Title,
} from "./styled";

type SpArtGalleryProps = {
  artGallery: string[];
  mainColor: string;
};

export const SpArtGallery: React.FC<SpArtGalleryProps> = ({
  artGallery,
  mainColor,
}) => {
  const [targetArt, setTargetArt] = useState<string | undefined>();
  const [isArtOpen, setIsArtOpen] = useState(false);
  const closeArt = useCallback(() => setIsArtOpen(false), [setIsArtOpen]);
  const carouselItems = useMemo(() => {
    return artGallery.map((url) => ({
      imageUrl: url,
      onClick: () => {
        setIsArtOpen(true);
        setTargetArt(url);
      },
    }));
  }, [artGallery, setIsArtOpen]);
  const stopPropagation = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => e.stopPropagation(),
    []
  );

  return artGallery.length > 0 ? (
    <>
      <Container>
        <Title>アートギャラリー</Title>
        <Carousel carouselItems={carouselItems} mainColor={mainColor} />
      </Container>
      <Backdrop isOpen={isArtOpen} onClick={closeArt}>
        {isArtOpen && <TargetArt onClick={stopPropagation} src={targetArt} />}
        <CardCloseButton mainColor={mainColor} onClick={closeArt}>
          <GoogleFontIcon iconName="close" size={16} color="white" />
        </CardCloseButton>
      </Backdrop>
    </>
  ) : null;
};
