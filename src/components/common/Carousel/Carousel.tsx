import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavigateArrow } from "../NavigateArrow";
import {
  ButtonsContainer,
  Container,
  Dot,
  DotContainer,
  DotsContainer,
  Item,
  ItemContainer,
  ItemListContainer,
  Screen,
} from "./styled";

type CarouselItem = {
  imageUrl: string;
  onClick: () => void;
};

const COPY_COUNT = 4;
const MINIMUM_DISTANCE = 10;

function fillArray(arr: any[], minLength: number) {
  const originalLength = arr.length;
  if (originalLength === 0 || originalLength >= minLength) {
    return arr;
  }
  const repeatCount = Math.ceil(5 / originalLength);

  let result: any[] = [];
  for (let i = 0; i < repeatCount; i++) {
    result = result.concat(arr);
  }

  return result;
}

export type CarouselProps = {
  className?: string;
  mainColor: string;
  carouselItems: CarouselItem[];
};

export const Carousel: React.FC<CarouselProps> = ({
  className,
  mainColor,
  carouselItems,
}) => {
  const [isTransition, setIsTransition] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // スワイプ開始時の座標
  const [startX, setStartX] = useState(0);
  // スワイプ終了時の座標
  const [endX, setEndX] = useState(0);

  // カルーセルの表示用データ
  const itemList = useMemo(() => {
    const baseItems = fillArray(carouselItems, COPY_COUNT);
    const items = baseItems.map((data) => ({ data, isCopy: false }));
    // 後ろの余分
    const copiedItemsBefore = baseItems
      .slice(carouselItems.length - COPY_COUNT)
      .map((data) => ({ data, isCopy: true }));
    // 先頭の余分
    const copiedItemsAfter = baseItems
      .slice(0, COPY_COUNT)
      .map((data) => ({ data, isCopy: true }));
    return [...copiedItemsBefore, ...items, ...copiedItemsAfter];
  }, [carouselItems]);
  // 表示用のインデックス
  const displayIndex = useMemo(() => {
    const itemCount = carouselItems.length;
    return (currentItemIndex + itemCount) % itemCount;
  }, [currentItemIndex]);

  const isCenterIndex = useCallback(
    (i: number) => currentItemIndex === i - COPY_COUNT,
    [currentItemIndex]
  );
  const handlePrev = useCallback(() => {
    if (!isTransition) {
      setIsTransition(true);
      setCurrentItemIndex((n) => n - 1);
    }
  }, [isTransition, setIsTransition, setCurrentItemIndex]);
  const handleNext = useCallback(() => {
    if (!isTransition) {
      setIsTransition(true);
      setCurrentItemIndex((n) => n + 1);
    }
  }, [isTransition, setIsTransition, setCurrentItemIndex]);
  const handleTransitionEnd = useCallback(() => {
    const itemCount = carouselItems.length;
    setIsTransition(false);
    setCurrentItemIndex((n) => (itemCount + n) % itemCount);
  }, [carouselItems, isTransition, setIsTransition, setCurrentItemIndex]);
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setStartX(e.touches[0].pageX);
      setEndX(e.touches[0].pageX);
    },
    [setStartX, setEndX]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setEndX(e.changedTouches[0].pageX);
    },
    [setEndX]
  );
  const handleTouchEnd = useCallback(() => {
    const distanceX = endX - startX;
    if (Math.abs(distanceX) > MINIMUM_DISTANCE) {
      if (distanceX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  }, [startX, endX, handlePrev, handleNext]);
  const onDotClick = useCallback(
    (idx: number) => {
      if (currentItemIndex === idx) return;
      setIsTransition(true);
      setCurrentItemIndex(idx);
    },
    [currentItemIndex, setIsTransition, setCurrentItemIndex]
  );

  useEffect(() => {
    const id = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(id);
  }, [handleNext]);

  return (
    <Container className={className}>
      <Screen
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ItemListContainer
          currentItemIndex={currentItemIndex}
          isTransition={isTransition}
          copyCount={COPY_COUNT}
          onTransitionEnd={handleTransitionEnd}
        >
          {itemList.map(({ data }, i) => (
            <ItemContainer key={i}>
              <Item
                src={data.imageUrl}
                isCenter={isCenterIndex(i)}
                isTransition={isTransition}
                onClick={() => {
                  if (!isCenterIndex(i)) {
                    setIsTransition(true);
                    setCurrentItemIndex(i - COPY_COUNT);
                  }
                  if (data.onClick) {
                    data.onClick();
                  }
                }}
              />
            </ItemContainer>
          ))}
        </ItemListContainer>
      </Screen>
      <ButtonsContainer>
        <NavigateArrow
          arrowDirection="left"
          arrowHeight={16}
          onClick={handlePrev}
          mainColor={mainColor}
        />
        <DotsContainer>
          {Array(carouselItems.length)
            .fill(0)
            .map((_, idx) => (
              <DotContainer key={idx} onClick={() => onDotClick(idx)}>
                <Dot isSelected={idx === displayIndex} mainColor={mainColor} />
              </DotContainer>
            ))}
        </DotsContainer>
        <NavigateArrow
          arrowDirection="right"
          arrowHeight={16}
          onClick={handleNext}
          mainColor={mainColor}
        />
      </ButtonsContainer>
    </Container>
  );
};
