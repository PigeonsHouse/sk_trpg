import { cx } from "@emotion/css";
import type { Profile } from "../../../types";
import { CommonFrame, LabelBox } from "../../common";
import {
  ContentsContainer,
  DescriptionContainer,
  ProfileFrameStyle,
  ProfileOneLineContainer,
  ProfilesContainer,
  Title,
} from "./styled";

type ProfileFrameProps = {
  className?: string;
  color: string;
  profileData: Profile;
};

/**
 * PC版のプロフィール表示フレーム
 */
export const ProfileFrame: React.FC<ProfileFrameProps> = ({
  className,
  color,
  profileData,
}) => {
  return (
    <CommonFrame className={cx(ProfileFrameStyle, className)}>
      <Title>プロフィール</Title>
      <ContentsContainer>
        <DescriptionContainer>{profileData.description}</DescriptionContainer>
        <ProfilesContainer>
          {Object.entries(profileData)
            .filter(([key]) => key !== "description")
            .map(([key, profileData]) => (
              <ProfileOneLineContainer key={key}>
                <LabelBox backgroundColor={color} label={key.toUpperCase()} />
                {profileData}
              </ProfileOneLineContainer>
            ))}
        </ProfilesContainer>
      </ContentsContainer>
    </CommonFrame>
  );
};
