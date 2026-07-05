import { Link } from "react-router";
import { GoogleFontIcon, MenuBoard } from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import { getImageUrl } from "../../../utils";
import {
  CharacterColumn,
  Container,
  SpBaselineBar,
  SpCaptionContainer,
  SpCaptionHeight,
  SpCaptionName,
  SpCharacterColumnStyle,
  SpComparisonRow,
  SpComparisonScroller,
  SpEnTitle,
  SpGuideLine,
  SpGuideLineLabel,
  SpGuideLineRow,
  SpGuideLinesContainer,
  SpMainContentsContainer,
  SpMenuBoardStyle,
  SpSortSignBoard,
  SpSortSignLabel,
  SpSortSignWrapper,
  SpSpriteImage,
  SpTitle,
  SpTitleContainer,
  SpriteLinkStyle,
} from "./styled";
import {
  GUIDE_LINE_COUNT,
  GUIDE_LINE_LABELS,
  type CharacterHeightEntry,
  type SortOrder,
} from "./types";

type SpCharacterHeightProps = {
  entries: CharacterHeightEntry[];
  order: SortOrder;
  onToggleOrder: () => void;
};

export const SpCharacterHeight: React.FC<SpCharacterHeightProps> = ({
  entries,
  order,
  onToggleOrder,
}) => {
  return (
    <Container isSp>
      <MenuBoard isSp className={SpMenuBoardStyle} />

      <SpMainContentsContainer>
        <SpTitleContainer>
          <SpTitle>身長比較</SpTitle>
          <SpEnTitle>Height Comparison</SpEnTitle>
        </SpTitleContainer>

        <SpComparisonScroller>
          <SpComparisonRow>
            <SpBaselineBar />
            <SpGuideLinesContainer>
              {Array.from({ length: GUIDE_LINE_COUNT }, (_, i) => i + 1).map(
                (i) => (
                  <SpGuideLineRow key={i}>
                    {GUIDE_LINE_LABELS[i] && (
                      <SpGuideLineLabel>
                        {GUIDE_LINE_LABELS[i]}
                      </SpGuideLineLabel>
                    )}
                    <SpGuideLine />
                  </SpGuideLineRow>
                )
              )}
            </SpGuideLinesContainer>
            {entries.map((entry) => (
              <CharacterColumn
                key={entry.id}
                className={SpCharacterColumnStyle}
              >
                <Link
                  to={Url.characterTo(entry.id as CharactersId)}
                  className={SpriteLinkStyle(entry.color)}
                >
                  <SpSpriteImage
                    src={getImageUrl(entry, "sprite")}
                    alt={entry.name}
                  />
                </Link>
                <SpCaptionContainer>
                  <SpCaptionName>{entry.name}</SpCaptionName>
                  <SpCaptionHeight>{entry.height}</SpCaptionHeight>
                </SpCaptionContainer>
              </CharacterColumn>
            ))}
          </SpComparisonRow>
        </SpComparisonScroller>

        <SpSortSignWrapper onClick={onToggleOrder}>
          <SpSortSignBoard>
            <GoogleFontIcon iconName="height" size={28} />
            <SpSortSignLabel>
              {order === "asc" ? "身長の低い順" : "身長の高い順"}
            </SpSortSignLabel>
          </SpSortSignBoard>
        </SpSortSignWrapper>
      </SpMainContentsContainer>
    </Container>
  );
};
