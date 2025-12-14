import { useMemo } from "react";
import { cx } from "@emotion/css";
import type { Status } from "../../../types";
import { arraySplitByCount } from "../../../utils";
import { CommonFrame, LabelBox } from "../../common";
import {
  FrameStyle,
  FrameTitle,
  LabelAreaContainer,
  LabelContainer,
  LabelStyle,
  LabelValue,
  StatusContainer,
} from "./styled";

type SpStatusFrameProps = {
  className?: string;
  status: Status;
  mainColor: string;
};

export const SpStatusFrame: React.FC<SpStatusFrameProps> = ({
  className,
  status,
  mainColor,
}) => {
  const splittedStatuses = useMemo(() => {
    const { type, ...exist } = status;
    return arraySplitByCount(Object.entries(exist), 2);
  }, [status]);

  return (
    <CommonFrame className={cx(FrameStyle, className)}>
      <FrameTitle>ステータス：{status.type}</FrameTitle>
      <StatusContainer>
        {splittedStatuses.map((splittedStatus, i) => (
          <LabelAreaContainer key={i}>
            {splittedStatus.map(([key, profileData]) => (
              <LabelContainer key={key}>
                <LabelBox
                  label={key}
                  backgroundColor={mainColor}
                  className={LabelStyle}
                />
                <LabelValue>{profileData}</LabelValue>
              </LabelContainer>
            ))}
          </LabelAreaContainer>
        ))}
      </StatusContainer>
    </CommonFrame>
  );
};
