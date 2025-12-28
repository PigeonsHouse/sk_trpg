import type React from "react";
import { Link } from "react-router";
import { SkebUrl, TwitterUrl, Url } from "../../../definitions";
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
    link: TwitterUrl,
    label: "X",
    enLabel: "Twitter",
  },
  {
    link: SkebUrl,
    label: "Skeb",
    enLabel: "Skeb",
  },
];

type TopGuideBoardProps = {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  isSp?: boolean;
  onClick?: () => void;
};

/**
 * TOPページやアバウトページへのリンクをまとめたボード
 */
export const TopGuideBoard: React.FC<TopGuideBoardProps> = ({
  className,
  ref,
  isSp,
  onClick,
}) => {
  return (
    <Container isSp={isSp} className={className} ref={ref}>
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
      {menuContents.map((content, idx) => {
        const isExternal = content.link.startsWith("https://");
        const menuContentDom = (
          <OneLineContainer>
            <Box isSp={isSp} />
            <TextContainer>
              <BigText isSp={isSp}>{content.label}</BigText>
              <SmallText isSp={isSp}>{content.enLabel}</SmallText>
            </TextContainer>
          </OneLineContainer>
        );
        return isExternal ? (
          <a
            key={idx}
            href={content.link}
            className={NoDecorationLinkStyle}
            target="_blank"
            onClick={onClick}
          >
            {menuContentDom}
          </a>
        ) : (
          <Link
            key={idx}
            to={content.link}
            className={NoDecorationLinkStyle}
            onClick={onClick}
          >
            {menuContentDom}
          </Link>
        );
      })}
    </Container>
  );
};
