import { useMemo } from "react";
import type { Skills } from "../../../types";
import { arraySplitBySize } from "../../../utils";
import { CommonFrame, LabelBox, SingleLight } from "../../common";
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

/**
 * PC版の技能値表示フレーム
 */
export const SkillsFrame: React.FC<SkillsFrameProps> = ({
  skills,
  colorPalette,
}) => {
  const [mainColor, , lightColor] = colorPalette;

  const [leftArray, rightArray] = useMemo(() => {
    const { type, ...displaySkills } = skills;
    const skillsArray = Object.entries(displaySkills);
    return arraySplitBySize(skillsArray, Math.ceil(skillsArray.length / 2));
  }, [skills]);

  return (
    <CommonFrame className={FrameStatus}>
      <Title>技能値</Title>
      <StatusContainer>
        <SkillsColumnContainer>
          {leftArray.map(([label, value]) => (
            <SkillsOneLineContainer key={label}>
              <LabelBox backgroundColor={mainColor} label={label} />
              <Value>{value}</Value>
            </SkillsOneLineContainer>
          ))}
        </SkillsColumnContainer>
        <SkillsColumnContainer>
          {rightArray.map(([label, value]) => (
            <SkillsOneLineContainer key={label}>
              <LabelBox backgroundColor={mainColor} label={label} />
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
