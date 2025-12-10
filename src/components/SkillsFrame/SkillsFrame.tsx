import { useMemo } from "react";
import type { Skills } from "../../types";
import { arraySplit } from "../../utils";
import { CommonFrame } from "../CommonFrame";
import { LabelBox, MaskImage } from "../LabelBox";
import { SingleLight } from "../SingleLight";
import {
  FrameStatus,
  SkillsColumnContainer,
  StatusContainer,
  SkillsOneLineContainer,
  Title,
  Value,
  TopBar,
  BottomBar,
  LightStyle,
} from "./styled";

type SkillsFrameProps = {
  skills: Skills;
  colorPalette: string[];
};

export const SkillsFrame: React.FC<SkillsFrameProps> = ({
  skills,
  colorPalette,
}) => {
  const [mainColor, , lightColor] = colorPalette;

  const [leftArray, rightArray] = useMemo(() => {
    const { type, ...displaySkills } = skills;
    const skillsArray = Object.entries(displaySkills);
    return arraySplit(skillsArray, Math.floor(skillsArray.length / 2));
  }, [skills]);

  return (
    <CommonFrame className={FrameStatus}>
      <Title>技能値</Title>
      <StatusContainer>
        <SkillsColumnContainer>
          {leftArray.map(([label, value]) => (
            <SkillsOneLineContainer key={label}>
              <LabelBox backgroundColor={mainColor}>
                {label.startsWith("mask") ? (
                  <MaskImage src="/images/common/skill-mask.png" />
                ) : (
                  label.toUpperCase()
                )}
              </LabelBox>
              <Value>{value}</Value>
            </SkillsOneLineContainer>
          ))}
        </SkillsColumnContainer>
        <SkillsColumnContainer>
          {rightArray.map(([label, value]) => (
            <SkillsOneLineContainer key={label}>
              <LabelBox backgroundColor={mainColor}>
                {label.startsWith("mask") ? (
                  <MaskImage src="/images/common/skill-mask.png" />
                ) : (
                  label.toUpperCase()
                )}
              </LabelBox>
              <Value>{value}</Value>
            </SkillsOneLineContainer>
          ))}
        </SkillsColumnContainer>
      </StatusContainer>

      <TopBar />
      <BottomBar />
      <SingleLight className={LightStyle} lightColor={lightColor} />
    </CommonFrame>
  );
};
