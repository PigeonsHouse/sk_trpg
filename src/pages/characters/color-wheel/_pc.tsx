import { Link } from "react-router";
import { HeadBoard, MenuBoard } from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import { getImageUrl } from "../../../utils";
import {
  achromaticEntries,
  chromaticEntries,
  resolveLinearOffsets,
  resolveWheelAngles,
} from "./data";
import {
  AchromaticArea,
  AchromaticBar,
  AchromaticBarArea,
  AchromaticEndLabel,
  AchromaticIconWrapper,
  BAR_HEIGHT,
  BAR_ICON_SIZE,
  ChromaticArea,
  Container,
  ContentRow,
  HeadBoardContainer,
  ICON_RADIUS,
  ICON_SIZE,
  IconImage,
  IconLinkStyle,
  IconNameTag,
  IconSpoke,
  IconSpokeInner,
  IconWrapper,
  MIN_BAR_GAP_PX,
  MIN_WHEEL_GAP_DEG,
  MainContentsContainer,
  MenuBoardStyle,
  SignBoard,
  SignEnLabel,
  SignLabel,
  WheelArea,
  WheelHole,
  WheelRing,
} from "./styled";

const wheelEntries = resolveWheelAngles(chromaticEntries, MIN_WHEEL_GAP_DEG);
const barOffsets = resolveLinearOffsets(
  achromaticEntries.map((entry) => (entry.lightness / 100) * BAR_HEIGHT),
  MIN_BAR_GAP_PX
);

export const PcCharacterColorWheel: React.FC = () => {
  return (
    <Container>
      <MenuBoard className={MenuBoardStyle} />

      <MainContentsContainer>
        <HeadBoardContainer>
          <HeadBoard label="色相環" enLabel="Color Wheel" />
        </HeadBoardContainer>

        <ContentRow>
          <ChromaticArea>
            <SignBoard>
              <SignLabel>有彩色</SignLabel>
              <SignEnLabel>Chromatic</SignEnLabel>
            </SignBoard>

            <WheelArea>
              <WheelRing />
              <WheelHole />

              {wheelEntries.map((entry) => (
                <IconSpoke key={entry.id} angle={entry.angle}>
                  <IconSpokeInner
                    angle={entry.angle}
                    radius={ICON_RADIUS}
                    size={ICON_SIZE}
                  >
                    <IconWrapper>
                      <Link
                        to={Url.characterTo(entry.id as CharactersId)}
                        className={IconLinkStyle(entry.color)}
                      >
                        <IconImage
                          src={getImageUrl(entry, "icon")}
                          alt={entry.name}
                          ringColor={entry.color}
                          size={ICON_SIZE}
                        />
                      </Link>
                      <IconNameTag className="icon-name-tag">
                        {entry.name}
                      </IconNameTag>
                    </IconWrapper>
                  </IconSpokeInner>
                </IconSpoke>
              ))}
            </WheelArea>
          </ChromaticArea>

          <AchromaticArea>
            <SignBoard>
              <SignLabel>無彩色</SignLabel>
              <SignEnLabel>Achromatic</SignEnLabel>
            </SignBoard>

            <AchromaticBarArea>
              <AchromaticBar />
              <AchromaticEndLabel position="top">White</AchromaticEndLabel>
              <AchromaticEndLabel position="bottom">Black</AchromaticEndLabel>

              {achromaticEntries.map((entry, i) => (
                <AchromaticIconWrapper key={entry.id} offset={barOffsets[i]}>
                  <IconWrapper>
                    <Link
                      to={Url.characterTo(entry.id as CharactersId)}
                      className={IconLinkStyle(entry.color)}
                    >
                      <IconImage
                        src={getImageUrl(entry, "icon")}
                        alt={entry.name}
                        ringColor={entry.color}
                        size={BAR_ICON_SIZE}
                      />
                    </Link>
                    <IconNameTag className="icon-name-tag">
                      {entry.name}
                    </IconNameTag>
                  </IconWrapper>
                </AchromaticIconWrapper>
              ))}
            </AchromaticBarArea>
          </AchromaticArea>
        </ContentRow>
      </MainContentsContainer>
    </Container>
  );
};
