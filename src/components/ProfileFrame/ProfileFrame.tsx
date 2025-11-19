import { cx } from "@emotion/css";
import { CommonFrame } from "../CommonFrame";
import {
  ContentsContainer,
  DescriptionContainer,
  ProfileFrameStyle,
  ProfileKeyBox,
  ProfileOneLineContainer,
  ProfilesContainer,
  Title,
} from "./styled";
import type { Profile } from "../../types";

type ProfileFrameProps = {
  className?: string;
  color: string;
  profileData: Profile;
};

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
          {Object.entries(profileData).map(([key, profileData]) => {
            if (key === "description") return;
            return (
              <ProfileOneLineContainer key={key}>
                <ProfileKeyBox color={color}>{key.toUpperCase()}</ProfileKeyBox>
                {profileData}
              </ProfileOneLineContainer>
            );
          })}
        </ProfilesContainer>
      </ContentsContainer>
    </CommonFrame>
  );
};
