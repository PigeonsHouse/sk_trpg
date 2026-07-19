import { Link } from "react-router";
import { MenuBoard } from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import { getImageUrl } from "../../../utils";
import {
  SpCharacterIconImage,
  SpCharacterIconStyle,
  SpCharacterLinkStyle,
  SpCharacterLinksContainer,
  SpContainer,
  SpEmptyDescription,
  SpEnTitle,
  SpListCard,
  SpMainContentsContainer,
  SpMenuBoardStyle,
  SpScenarioBullet,
  SpScenarioItem,
  SpScenarioList,
  SpScenarioTitle,
  SpScenarioTitleRow,
  SpSection,
  SpSectionEnTitle,
  SpSectionTitle,
  SpSectionTitleContainer,
  SpTitle,
  SpTitleContainer,
} from "./styled";
import type { ScenarioListItem } from "./types";

type SpCharacterScenariosProps = {
  completedList: ScenarioListItem[];
  upcomingList: string[];
  watchedList: string[];
  wishlist: string[];
};

export const SpCharacterScenarios: React.FC<SpCharacterScenariosProps> = ({
  completedList,
  upcomingList,
  watchedList,
  wishlist,
}) => {
  return (
    <SpContainer>
      <MenuBoard isSp className={SpMenuBoardStyle} />

      <SpMainContentsContainer>
        <SpTitleContainer>
          <SpTitle>線路図</SpTitle>
          <SpEnTitle>Route Map</SpEnTitle>
        </SpTitleContainer>

        <SpSection>
          <SpSectionTitleContainer>
            <SpSectionTitle>通過済みシナリオ</SpSectionTitle>
            <SpSectionEnTitle>Completed</SpSectionEnTitle>
          </SpSectionTitleContainer>

          {completedList.length === 0 ? (
            <SpEmptyDescription>
              まだ登録されたシナリオがありません。
            </SpEmptyDescription>
          ) : (
            <SpListCard>
              <SpScenarioList>
                {completedList.map((scenario, idx) => (
                  <SpScenarioItem key={`${scenario.title}-${idx}`}>
                    <SpScenarioTitleRow>
                      <SpScenarioBullet />
                      <SpScenarioTitle>{scenario.title}</SpScenarioTitle>
                    </SpScenarioTitleRow>
                    {scenario.characters.length > 0 && (
                      <SpCharacterLinksContainer>
                        {scenario.characters.map((character) => (
                          <Link
                            key={character.id}
                            to={Url.characterTo(character.id as CharactersId)}
                            className={SpCharacterLinkStyle}
                          >
                            <span
                              className={SpCharacterIconStyle(character.color)}
                            >
                              <SpCharacterIconImage
                                src={getImageUrl(character, "icon")}
                                alt={character.name}
                              />
                            </span>
                            {character.name}
                          </Link>
                        ))}
                      </SpCharacterLinksContainer>
                    )}
                  </SpScenarioItem>
                ))}
              </SpScenarioList>
            </SpListCard>
          )}
        </SpSection>

        {watchedList.length > 0 && (
          <SpSection>
            <SpSectionTitleContainer>
              <SpSectionTitle>視聴済みシナリオ</SpSectionTitle>
              <SpSectionEnTitle>Watched</SpSectionEnTitle>
            </SpSectionTitleContainer>

            <SpListCard>
              <SpScenarioList>
                {watchedList.map((title, idx) => (
                  <SpScenarioItem key={`${title}-${idx}`}>
                    <SpScenarioTitleRow>
                      <SpScenarioBullet />
                      <SpScenarioTitle>{title}</SpScenarioTitle>
                    </SpScenarioTitleRow>
                  </SpScenarioItem>
                ))}
              </SpScenarioList>
            </SpListCard>
          </SpSection>
        )}

        {upcomingList.length > 0 && (
          <SpSection>
            <SpSectionTitleContainer>
              <SpSectionTitle>通過予定シナリオ</SpSectionTitle>
              <SpSectionEnTitle>Upcoming</SpSectionEnTitle>
            </SpSectionTitleContainer>

            <SpListCard>
              <SpScenarioList>
                {upcomingList.map((title, idx) => (
                  <SpScenarioItem key={`${title}-${idx}`}>
                    <SpScenarioTitleRow>
                      <SpScenarioBullet />
                      <SpScenarioTitle>{title}</SpScenarioTitle>
                    </SpScenarioTitleRow>
                  </SpScenarioItem>
                ))}
              </SpScenarioList>
            </SpListCard>
          </SpSection>
        )}

        {wishlist.length > 0 && (
          <SpSection>
            <SpSectionTitleContainer>
              <SpSectionTitle>行きたいシナリオ</SpSectionTitle>
              <SpSectionEnTitle>Wishlist</SpSectionEnTitle>
            </SpSectionTitleContainer>

            <SpListCard>
              <SpScenarioList>
                {wishlist.map((title, idx) => (
                  <SpScenarioItem key={`${title}-${idx}`}>
                    <SpScenarioTitleRow>
                      <SpScenarioBullet />
                      <SpScenarioTitle>{title}</SpScenarioTitle>
                    </SpScenarioTitleRow>
                  </SpScenarioItem>
                ))}
              </SpScenarioList>
            </SpListCard>
          </SpSection>
        )}
      </SpMainContentsContainer>
    </SpContainer>
  );
};
