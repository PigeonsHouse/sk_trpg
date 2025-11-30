import { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { UiColor } from "../../definitions";
import type { History } from "../../types";
import { CommonFrame } from "../CommonFrame";
import { NameContainer } from "../NameContainer";
import {
  Title,
  FrameStyle,
  TitleContainer,
  TopBar,
  BottomBar,
  IndexCircle,
  Container,
  ScrollContainer,
  HistoriesContainer,
  HistoryLightBar,
  HistoryOneLineContainer,
  HistoryLight,
  HistoryTitle,
  ShortIdBoard,
  HistoryDetailAreaContainer,
  HistoryDetailContainer,
  SpeechBubbleTriangle,
  HistoryCommentContainer,
  HistoryIconImage,
  HistoryComment,
  CompanionContainer,
  CompanionTitle,
  CompanionInfoContainer,
  SingleCompanionInfoContainer,
  CompanionIconImage,
  ShortId,
  ShortIdNumber,
  CompanionNameStyle,
} from "./styled";

type HistoryFrameProps = {
  selectedIndex: number;
  changeIndex: (index: number) => void;
  histories: History[];
  color: string;
  selectedColor: string;
  shortId: string;
  number: number;
};

export const HistoryFrame: React.FC<HistoryFrameProps> = ({
  selectedIndex,
  changeIndex,
  histories,
  color,
  selectedColor,
  shortId,
  number,
}) => {
  const selectedHistory = useMemo(
    () => histories[selectedIndex],
    [histories, selectedIndex]
  );

  return (
    <Container>
      <CommonFrame className={FrameStyle}>
        <TitleContainer>
          <MdLocationPin size={44} color={UiColor.black} />
          <Title>停車駅</Title>
        </TitleContainer>
        <ScrollContainer>
          <HistoriesContainer>
            <HistoryLightBar count={histories.length} />
            {histories.map((history, idx) => (
              <HistoryOneLineContainer
                onClick={() => changeIndex(idx)}
                key={idx}
              >
                <HistoryLight
                  isSelected={selectedIndex === idx}
                  selectedColor={selectedColor}
                />
                <IndexCircle color={color}>{idx + 1}</IndexCircle>
                <HistoryTitle>{history.title}</HistoryTitle>
              </HistoryOneLineContainer>
            ))}
          </HistoriesContainer>
        </ScrollContainer>

        <TopBar />
        <BottomBar />
        <ShortIdBoard color={selectedColor}>
          <ShortId>{shortId}</ShortId>
          <ShortIdNumber>{`#${String(number).padStart(2, "0")}`}</ShortIdNumber>
        </ShortIdBoard>
      </CommonFrame>

      <HistoryDetailAreaContainer>
        <HistoryDetailContainer color={color}>
          <SpeechBubbleTriangle color={color} />
          <HistoryCommentContainer>
            <HistoryIconImage src={selectedHistory.iconUrl} />
            <HistoryComment>{selectedHistory.comment}</HistoryComment>
          </HistoryCommentContainer>
          {selectedHistory.companions.length > 0 && (
            <CompanionContainer>
              <CompanionTitle>同行者</CompanionTitle>
              <CompanionInfoContainer>
                {selectedHistory.companions.map((companion, i) => (
                  <SingleCompanionInfoContainer key={i}>
                    <CompanionIconImage
                      src={companion.iconUrl}
                      color={companion.color}
                    />
                    <NameContainer
                      name={companion.name}
                      enName={companion.enName}
                      className={CompanionNameStyle}
                    />
                  </SingleCompanionInfoContainer>
                ))}
              </CompanionInfoContainer>
            </CompanionContainer>
          )}
        </HistoryDetailContainer>
      </HistoryDetailAreaContainer>
    </Container>
  );
};
