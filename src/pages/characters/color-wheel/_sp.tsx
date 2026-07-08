import { Link } from "react-router";
import { MenuBoard } from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import { getImageUrl } from "../../../utils";
import {
  achromaticEntries,
  chromaticEntries,
  resolveLinearOffsets,
  resolveWheelAngles,
} from "./data";
import { useWheelScroll } from "./index.app";
import {
  Container,
  IconImage,
  IconLinkStyle,
  IconSpoke,
  IconSpokeInner,
  SP_BAR_ICON_SIZE,
  SP_BAR_LENGTH,
  SP_ICON_RADIUS,
  SP_ICON_SIZE,
  SP_MIN_BAR_GAP_PX,
  SP_MIN_WHEEL_GAP_DEG,
  SpAchromaticArea,
  SpAchromaticBar,
  SpAchromaticBarArea,
  SpAchromaticIconWrapper,
  SpEnTitle,
  SpMainContentsContainer,
  SpMenuBoardStyle,
  SpScrollHint,
  SpSignBoard,
  SpSignEnLabel,
  SpSignLabel,
  SpTitle,
  SpTitleContainer,
  SpWheelArea,
  SpWheelHole,
  SpWheelRing,
  SpWheelSection,
  SpWheelViewport,
} from "./styled";

const spWheelEntries = resolveWheelAngles(
  chromaticEntries,
  SP_MIN_WHEEL_GAP_DEG
);
const spBarOffsets = resolveLinearOffsets(
  achromaticEntries.map((entry) => (entry.lightness / 100) * SP_BAR_LENGTH),
  SP_MIN_BAR_GAP_PX
);

export const SpCharacterColorWheel: React.FC = () => {
  const { rotation, wheelRef } = useWheelScroll();

  return (
    <Container>
      <MenuBoard isSp className={SpMenuBoardStyle} />

      <SpMainContentsContainer>
        <SpTitleContainer>
          <SpTitle>色相環</SpTitle>
          <SpEnTitle>Color Wheel</SpEnTitle>
        </SpTitleContainer>

        <SpAchromaticArea>
          <SpSignBoard>
            <SpSignLabel>無彩色</SpSignLabel>
            <SpSignEnLabel>Achromatic</SpSignEnLabel>
          </SpSignBoard>

          <SpAchromaticBarArea>
            <SpAchromaticBar />

            {achromaticEntries.map((entry, i) => (
              <SpAchromaticIconWrapper key={entry.id} offset={spBarOffsets[i]}>
                <Link
                  to={Url.characterTo(entry.id as CharactersId)}
                  className={IconLinkStyle(entry.color)}
                  title={entry.name}
                >
                  <IconImage
                    src={getImageUrl(entry, "icon")}
                    alt={entry.name}
                    ringColor={entry.color}
                    size={SP_BAR_ICON_SIZE}
                  />
                </Link>
              </SpAchromaticIconWrapper>
            ))}
          </SpAchromaticBarArea>
        </SpAchromaticArea>
      </SpMainContentsContainer>

      <SpWheelSection>
        <SpSignBoard>
          <SpSignLabel>有彩色</SpSignLabel>
          <SpSignEnLabel>Chromatic</SpSignEnLabel>
        </SpSignBoard>

        <SpWheelViewport ref={wheelRef}>
          <SpWheelArea>
            <SpWheelRing rotation={rotation} />
            <SpWheelHole />

            {spWheelEntries.map((entry) => {
              const angle = entry.angle + rotation;
              return (
                <IconSpoke key={entry.id} angle={angle}>
                  <IconSpokeInner
                    angle={angle}
                    radius={SP_ICON_RADIUS}
                    size={SP_ICON_SIZE}
                  >
                    <Link
                      to={Url.characterTo(entry.id as CharactersId)}
                      className={IconLinkStyle(entry.color)}
                      title={entry.name}
                    >
                      <IconImage
                        src={getImageUrl(entry, "icon")}
                        alt={entry.name}
                        ringColor={entry.color}
                        size={SP_ICON_SIZE}
                      />
                    </Link>
                  </IconSpokeInner>
                </IconSpoke>
              );
            })}
          </SpWheelArea>
        </SpWheelViewport>
        <SpScrollHint>▲ スクロールして回転 ▼</SpScrollHint>
      </SpWheelSection>
    </Container>
  );
};
