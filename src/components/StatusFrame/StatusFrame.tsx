import { useMemo } from "react";
import type { Status } from "../../types";
import { arraySplit } from "../../utils";
import { CommonFrame } from "../CommonFrame";
import { LabelBox } from "../LabelBox";
import { TrafficLight } from "../TrafficLight";
import {
  BottomBar,
  FrameStatus,
  StatusColumnContainer,
  StatusContainer,
  StatusOneLineContainer,
  Title,
  TopBar,
  TrafficLightStyle,
  Value,
} from "./styled";

type StatusFrameProps = {
  status: Status;
  colorPalette: string[];
};

export const StatusFrame: React.FC<StatusFrameProps> = ({
  status,
  colorPalette,
}) => {
  const mainColor = colorPalette[0];
  const title = `ステータス：${status.type}`;
  const [leftArray, rightArray] = useMemo(() => {
    const { type, ...displayStatus } = status;
    const statusArray = Object.entries(displayStatus);
    return arraySplit(statusArray, Math.floor(statusArray.length / 2));
  }, [status]);

  return (
    <CommonFrame className={FrameStatus}>
      <Title>{title}</Title>
      <StatusContainer>
        <StatusColumnContainer>
          {leftArray.map(([label, value]) => (
            <StatusOneLineContainer key={label}>
              <LabelBox backgroundColor={mainColor}>
                {label.toUpperCase()}
              </LabelBox>
              <Value>{value}</Value>
            </StatusOneLineContainer>
          ))}
        </StatusColumnContainer>
        <StatusColumnContainer>
          {rightArray.map(([label, value]) => (
            <StatusOneLineContainer key={label}>
              <LabelBox backgroundColor={mainColor}>
                {label.toUpperCase()}
              </LabelBox>
              <Value>{value}</Value>
            </StatusOneLineContainer>
          ))}
        </StatusColumnContainer>
      </StatusContainer>

      <TopBar />
      <BottomBar />
      <TrafficLight className={TrafficLightStyle} colorPalette={colorPalette} />
    </CommonFrame>
  );
};
