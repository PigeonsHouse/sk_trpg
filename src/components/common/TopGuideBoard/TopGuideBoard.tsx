import type React from "react";
import { Link } from "react-router";
import { Url } from "../../../definitions";
import { GoogleFontIcon } from "../GoogleFontIcon";
import {
  ArrowStyle,
  BigText,
  Box,
  Container,
  NoDecorationLinkStyle,
  OneLineContainer,
  SmallText,
  TextContainer,
  TopContainer,
  TopLabel,
} from "./styled";

const menuContents = [
  {
    link: Url.aboutTo("about"),
    label: "このサイトは何？",
    enLabel: "What is this?",
  },
  {
    link: Url.aboutTo("characters"),
    label: "キャラクター",
    enLabel: "Characters",
  },
  {
    link: Url.aboutTo("twitter"),
    label: "X",
    enLabel: "Twitter",
  },
  {
    link: Url.aboutTo("skeb"),
    label: "Skeb",
    enLabel: "Skeb",
  },
];

type TopGuideBoardProps = {
  className?: string;
  isSp?: boolean;
};

/**
 * TOPページやアバウトページへのリンクをまとめたボード
 */
export const TopGuideBoard: React.FC<TopGuideBoardProps> = ({
  className,
  isSp,
}) => {
  return (
    <Container isSp={isSp} className={className}>
      <Link to={Url.top} className={NoDecorationLinkStyle}>
        <TopContainer>
          <GoogleFontIcon
            iconName="arrow_outward"
            size={isSp ? 64 : 80}
            className={ArrowStyle}
          />
          <TopLabel isSp={isSp}>TOP</TopLabel>
        </TopContainer>
      </Link>
      {menuContents.map((content, idx) => (
        <Link key={idx} to={content.link} className={NoDecorationLinkStyle}>
          <OneLineContainer>
            <Box isSp={isSp} />
            <TextContainer>
              <BigText isSp={isSp}>{content.label}</BigText>
              <SmallText isSp={isSp}>{content.enLabel}</SmallText>
            </TextContainer>
          </OneLineContainer>
        </Link>
      ))}
    </Container>
  );
};
