import { cx } from "@emotion/css";
import type { Profile } from "../../types";
import { CommonFrame } from "../CommonFrame";
import { LabelBox } from "../LabelBox";
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
                <LabelBox color={color}>{key.toUpperCase()}</LabelBox>
                {profileData}
              </ProfileOneLineContainer>
            );
          })}
        </ProfilesContainer>
      </ContentsContainer>
    </CommonFrame>
  );
};
