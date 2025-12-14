import { cx } from "@emotion/css";
import { UiColor } from "../../../definitions";
import type { History } from "../../../types";
import { CommonFrame, GoogleFontIcon } from "../../common";
import { FrameStyle, Title } from "./styled";

type SpHistoryFrameProps = {
  className?: string;
  histories: History[];
};

export const SpHistoryFrame: React.FC<SpHistoryFrameProps> = ({
  className,
  histories,
}) => {
  return (
    <CommonFrame className={cx(FrameStyle, className)}>
      <Title>
        <GoogleFontIcon
          iconName="fmd_good"
          size={32}
          color={UiColor.darkGray}
        />
        停車駅
      </Title>
      <div>
        {histories.map((history, i) => (
          <div key={i}>{history.title}</div>
        ))}
      </div>
    </CommonFrame>
  );
};
