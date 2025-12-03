import { useMemo } from "react";
import { UiColor } from "../../definitions";
import type { History } from "../../types";
import { CommonFrame } from "../CommonFrame";
import { GoogleFontIcon } from "../GoogleFontIcon";
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
  CallIconStyle,
  NickNameContainer,
  NickName,
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
          <GoogleFontIcon
            iconName="fmd_good"
            size={44}
            color={UiColor.darkGray}
          />
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
                <IndexCircle borderColor={color}>{idx + 1}</IndexCircle>
                <HistoryTitle>{history.title}</HistoryTitle>
              </HistoryOneLineContainer>
            ))}
          </HistoriesContainer>
        </ScrollContainer>

        <TopBar />
        <BottomBar />
        <ShortIdBoard backgroundColor={selectedColor}>
          <ShortId>{shortId}</ShortId>
          <ShortIdNumber>{`#${String(number).padStart(2, "0")}`}</ShortIdNumber>
        </ShortIdBoard>
      </CommonFrame>

      <HistoryDetailAreaContainer>
        <HistoryDetailContainer backgroundColor={color}>
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
                      backgroundColor={companion.color}
                    />
                    <NameContainer
                      name={companion.name}
                      enName={companion.enName}
                      className={CompanionNameStyle}
                    />
                    <NickNameContainer mainColor={color}>
                      <GoogleFontIcon
                        iconName="spatial_audio_off"
                        size={24}
                        className={CallIconStyle}
                      />
                      <NickName>{companion.nickName}</NickName>
                    </NickNameContainer>
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
