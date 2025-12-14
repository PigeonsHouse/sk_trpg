import { useMemo } from "react";
import type { Profile } from "../../../types";
import { CommonFrame, LabelBox } from "../../common";
import {
  Description,
  DescriptionContainer,
  FrameTitle,
  FrameStyle,
  LabelAreaContainer,
  LabelContainer,
  LabelStyle,
  LabelValue,
} from "./styled";

type SpProfileFrameProps = {
  profile: Profile;
  mainColor: string;
};

export const SpProfileFrame: React.FC<SpProfileFrameProps> = ({
  profile,
  mainColor,
}) => {
  const listingProfile = useMemo(() => {
    const { description, ...exist } = profile;
    return Object.entries(exist);
  }, [profile]);

  return (
    <CommonFrame className={FrameStyle}>
      <FrameTitle>プロフィール</FrameTitle>
      <DescriptionContainer>
        <Description>{profile.description}</Description>
      </DescriptionContainer>
      <LabelAreaContainer>
        {listingProfile.map(([key, profileData]) => (
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
    </CommonFrame>
  );
};
