import { Link } from "react-router";
import { HeadBoard, MenuBoard } from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import { getImageUrl } from "../../../utils";
import {
  CharacterIconImage,
  CharacterIconStyle,
  CharacterLinkStyle,
  CharacterLinksContainer,
  Container,
  EmptyDescription,
  HeadBoardContainer,
  ListCard,
  MainContentsContainer,
  MenuBoardStyle,
  ScenarioBullet,
  ScenarioItem,
  ScenarioList,
  ScenarioTitle,
  ScenarioTitleRow,
  Section,
  SectionEnTitle,
  SectionTitle,
  SectionTitleContainer,
} from "./styled";
import type { ScenarioListItem } from "./types";

type PcCharacterScenariosProps = {
  completedList: ScenarioListItem[];
  upcomingList: string[];
};

export const PcCharacterScenarios: React.FC<PcCharacterScenariosProps> = ({
  completedList,
  upcomingList,
}) => {
  return (
    <Container>
      <MenuBoard className={MenuBoardStyle} />

      <HeadBoardContainer>
        <HeadBoard label="通過シナリオ一覧" enLabel="Scenario History" />
      </HeadBoardContainer>

      <MainContentsContainer>
        <Section>
          <SectionTitleContainer>
            <SectionTitle>通過済みシナリオ</SectionTitle>
            <SectionEnTitle>Completed</SectionEnTitle>
          </SectionTitleContainer>

          {completedList.length === 0 ? (
            <EmptyDescription>
              まだ登録されたシナリオがありません。
            </EmptyDescription>
          ) : (
            <ListCard>
              <ScenarioList>
                {completedList.map((scenario, idx) => (
                  <ScenarioItem key={`${scenario.title}-${idx}`}>
                    <ScenarioTitleRow>
                      <ScenarioBullet />
                      <ScenarioTitle>{scenario.title}</ScenarioTitle>
                    </ScenarioTitleRow>
                    {scenario.characters.length > 0 && (
                      <CharacterLinksContainer>
                        {scenario.characters.map((character) => (
                          <Link
                            key={character.id}
                            to={Url.characterTo(character.id as CharactersId)}
                            className={CharacterLinkStyle}
                          >
                            <span
                              className={CharacterIconStyle(character.color)}
                            >
                              <CharacterIconImage
                                src={getImageUrl(character, "icon")}
                                alt={character.name}
                              />
                            </span>
                            {character.name}
                          </Link>
                        ))}
                      </CharacterLinksContainer>
                    )}
                  </ScenarioItem>
                ))}
              </ScenarioList>
            </ListCard>
          )}
        </Section>

        {upcomingList.length > 0 && (
          <Section>
            <SectionTitleContainer>
              <SectionTitle>通過予定シナリオ</SectionTitle>
              <SectionEnTitle>Upcoming</SectionEnTitle>
            </SectionTitleContainer>

            <ListCard>
              <ScenarioList>
                {upcomingList.map((title, idx) => (
                  <ScenarioItem key={`${title}-${idx}`}>
                    <ScenarioTitleRow>
                      <ScenarioBullet />
                      <ScenarioTitle>{title}</ScenarioTitle>
                    </ScenarioTitleRow>
                  </ScenarioItem>
                ))}
              </ScenarioList>
            </ListCard>
          </Section>
        )}
      </MainContentsContainer>
    </Container>
  );
};
