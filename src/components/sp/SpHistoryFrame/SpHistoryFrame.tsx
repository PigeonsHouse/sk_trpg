import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "@emotion/css";
import { UiColor } from "../../../definitions";
import type { History } from "../../../types";
import { CommonFrame, GoogleFontIcon, NameContainer } from "../../common";
import {
  Backdrop,
  CardAvatar,
  CardCloseButton,
  CardComment,
  CardCompanionContainer,
  CardCompanionCoverContainer,
  CardCompanionScrollContainer,
  CardCompanionTitle,
  CardTitle,
  CompanionContainer,
  CompanionIcon,
  CompanionLeftContainer,
  CompanionListContainer,
  CompanionNameStyle,
  CompanionNickName,
  CompanionRightContainer,
  FrameStyle,
  HistoriesContainer,
  HistoryCard,
  HistoryContainer,
  HistoryLight,
  HistoryLightBar,
  HistoryTitle,
  IconSwapStyle,
  IndexCircle,
  Title,
  WhiteGradation,
} from "./styled";

type SpHistoryFrameProps = {
  className?: string;
  histories: History[];
  mainColor: string;
  selectedColor: string;
  selectedHistoryIndex: number;
  setSelectedHistoryIndex: (index: number) => void;
};

export const SpHistoryFrame: React.FC<SpHistoryFrameProps> = ({
  className,
  histories,
  mainColor,
  selectedColor,
  selectedHistoryIndex,
  setSelectedHistoryIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenMenu = useCallback(() => setIsOpen(true), [setIsOpen]);
  const onCloseMenu = useCallback(() => setIsOpen(false), [setIsOpen]);
  const stopPropagation = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(),
    []
  );

  const nameContainerRef = useRef<HTMLDivElement | null>(null);
  const [isRemainRight, setIsRemainRight] = useState(false);

  useEffect(() => {
    const calcIsRemainRight = () => {
      if (!nameContainerRef.current) return;
      const target = nameContainerRef.current;
      const isOver = target.scrollWidth > target.clientWidth;
      const isReachRight =
        target.scrollWidth - target.scrollLeft <= target.clientWidth;
      setIsRemainRight(isOver && !isReachRight);
    };

    calcIsRemainRight();
    window.addEventListener("resize", calcIsRemainRight);
    nameContainerRef.current?.addEventListener("scroll", calcIsRemainRight);
    return () => {
      window.removeEventListener("resize", calcIsRemainRight);
      nameContainerRef.current?.removeEventListener(
        "scroll",
        calcIsRemainRight
      );
    };
  }, [histories, nameContainerRef, setIsRemainRight]);

  return (
    <>
      <CommonFrame className={cx(FrameStyle, className)}>
        <Title>
          <GoogleFontIcon
            iconName="fmd_good"
            size={32}
            color={UiColor.darkGray}
          />
          停車駅
        </Title>
        <HistoriesContainer>
          {histories.map((history, i) => (
            <HistoryContainer
              key={i}
              onClick={() => {
                setSelectedHistoryIndex(i);
                onOpenMenu();
              }}
            >
              <HistoryLight
                isSelect={selectedHistoryIndex === i}
                selectedColor={selectedColor}
              />
              <IndexCircle borderColor={mainColor}>{i + 1}</IndexCircle>
              <HistoryTitle>{history.title}</HistoryTitle>
            </HistoryContainer>
          ))}
          <HistoryLightBar historiesLength={histories.length} />
        </HistoriesContainer>
      </CommonFrame>
      <Backdrop isOpen={isOpen} onClick={onCloseMenu}>
        <HistoryCard mainColor={mainColor} onClick={stopPropagation}>
          <CardTitle>COMMENT</CardTitle>
          <CardAvatar src={histories[selectedHistoryIndex].iconUrl} />
          <CardComment>{histories[selectedHistoryIndex].comment}</CardComment>
          <CardCompanionContainer>
            <CardCompanionTitle>同行者</CardCompanionTitle>
            <CardCompanionCoverContainer>
              <CardCompanionScrollContainer ref={nameContainerRef}>
                <CompanionListContainer>
                  {histories[selectedHistoryIndex].companions.map(
                    (companion, index) => (
                      <CompanionContainer key={index}>
                        <CompanionLeftContainer>
                          <CompanionIcon
                            src={companion.iconUrl}
                            companionColor={companion.color}
                          />
                          <NameContainer
                            name={companion.name}
                            enName={companion.enName}
                            className={CompanionNameStyle}
                            isSp
                          />
                        </CompanionLeftContainer>
                        <CompanionRightContainer mainColor={mainColor}>
                          <GoogleFontIcon
                            iconName="spatial_audio_off"
                            size={24}
                            color={mainColor}
                            className={IconSwapStyle}
                          />
                          <CompanionNickName>
                            {companion.nickName}
                          </CompanionNickName>
                        </CompanionRightContainer>
                      </CompanionContainer>
                    )
                  )}
                </CompanionListContainer>
              </CardCompanionScrollContainer>
              {isRemainRight && <WhiteGradation />}
            </CardCompanionCoverContainer>
          </CardCompanionContainer>
          <CardCloseButton onClick={onCloseMenu}>
            <GoogleFontIcon iconName="close" size={24} color={mainColor} />
          </CardCloseButton>
        </HistoryCard>
      </Backdrop>
    </>
  );
};
