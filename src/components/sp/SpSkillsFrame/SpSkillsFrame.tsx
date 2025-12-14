import { cx } from "@emotion/css";
import type { Skills } from "../../../types";
import { CommonFrame, GoogleFontIcon, LabelBox } from "../../common";
import {
  ExpandButton,
  ButtonIconStyle,
  LabelAreaContainer,
  LabelContainer,
  LabelStyle,
  LabelValue,
  SkillsContainer,
  FrameStyle,
  SpWhiteOut,
  SpWhiteOutContainer,
  Title,
} from "./styled";

type SpSkillsFrameProps = {
  className?: string;
  skills: Skills;
  mainColor: string;
  isExpand: boolean;
  switchExpand: () => void;
};

export const SpSkillsFrame: React.FC<SpSkillsFrameProps> = ({
  className,
  skills,
  mainColor,
  isExpand,
  switchExpand,
}) => {
  const expandButtonLabel = isExpand ? "とじる" : "ひらく";

  return (
    <CommonFrame className={cx(FrameStyle, className)}>
      <Title>技能値</Title>
      <SkillsContainer>
        <SpWhiteOutContainer open={isExpand}>
          <LabelAreaContainer>
            {Object.entries(skills).map(([key, skillData]) => (
              <LabelContainer key={key}>
                <LabelBox
                  label={key}
                  backgroundColor={mainColor}
                  className={LabelStyle}
                />
                <LabelValue>{skillData}</LabelValue>
              </LabelContainer>
            ))}
            <SpWhiteOut open={isExpand} />
          </LabelAreaContainer>
        </SpWhiteOutContainer>
        <ExpandButton onClick={switchExpand}>
          {expandButtonLabel}
          <GoogleFontIcon
            iconName="arrow_drop_down"
            size={24}
            className={isExpand ? ButtonIconStyle : undefined}
          />
        </ExpandButton>
      </SkillsContainer>
    </CommonFrame>
  );
};
