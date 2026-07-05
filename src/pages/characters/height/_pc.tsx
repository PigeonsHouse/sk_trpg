import { Link } from "react-router";
import { GoogleFontIcon, HeadBoard, MenuBoard } from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import {
  BaselineBar,
  CaptionContainer,
  CaptionHeight,
  CaptionName,
  CharacterColumn,
  ComparisonRow,
  ComparisonScroller,
  Container,
  GuideLine,
  GuideLineLabel,
  GuideLineRow,
  GuideLinesContainer,
  HeadBoardContainer,
  MainContentsContainer,
  MenuBoardStyle,
  NoDecorationLinkStyle,
  SortSignBoard,
  SortSignLabel,
  SortSignWrapper,
  SpriteImage,
} from "./styled";
import {
  GUIDE_LINE_COUNT,
  GUIDE_LINE_LABELS,
  type CharacterHeightEntry,
  type SortOrder,
} from "./types";

type PcCharacterHeightProps = {
  entries: CharacterHeightEntry[];
  order: SortOrder;
  onToggleOrder: () => void;
};

export const PcCharacterHeight: React.FC<PcCharacterHeightProps> = ({
  entries,
  order,
  onToggleOrder,
}) => {
  return (
    <Container>
      <MenuBoard className={MenuBoardStyle} />

      <MainContentsContainer>
        <HeadBoardContainer>
          <HeadBoard label="身長比較" enLabel="Height Comparison" />
        </HeadBoardContainer>

        <SortSignWrapper onClick={onToggleOrder}>
          <SortSignBoard>
            <GoogleFontIcon iconName="height" size={40} />
            <SortSignLabel>
              {order === "asc" ? "身長の低い順" : "身長の高い順"}
            </SortSignLabel>
          </SortSignBoard>
        </SortSignWrapper>

        <ComparisonScroller>
          <ComparisonRow>
            <BaselineBar />
            <GuideLinesContainer>
              {Array.from({ length: GUIDE_LINE_COUNT }, (_, i) => i + 1).map(
                (i) => (
                  <GuideLineRow key={i}>
                    {GUIDE_LINE_LABELS[i] && (
                      <GuideLineLabel>{GUIDE_LINE_LABELS[i]}</GuideLineLabel>
                    )}
                    <GuideLine />
                  </GuideLineRow>
                )
              )}
            </GuideLinesContainer>
            {entries.map((entry) => (
              <CharacterColumn key={entry.id}>
                <Link
                  to={Url.characterTo(entry.id as CharactersId)}
                  className={NoDecorationLinkStyle}
                >
                  <SpriteImage src={entry.spriteUrl} alt={entry.name} />
                </Link>
                <CaptionContainer>
                  <CaptionName>{entry.name}</CaptionName>
                  <CaptionHeight>{entry.height}</CaptionHeight>
                </CaptionContainer>
              </CharacterColumn>
            ))}
          </ComparisonRow>
        </ComparisonScroller>
      </MainContentsContainer>
    </Container>
  );
};
