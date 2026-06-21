import type React from "react";
import { Link } from "react-router";
import { SkebUrl, TwitterUrl, Url } from "../../../definitions";
import { GoogleFontIcon } from "../GoogleFontIcon";
import {
  ArrowStyle,
  BigText,
  Container,
  NoDecorationLinkStyle,
  OneLineContainer,
  SkebLogo,
  SmallText,
  TextContainer,
  TopContainer,
  TopLabel,
  XLogo,
} from "./styled";

const menuContents = [
  {
    icon: (size: number) => <GoogleFontIcon iconName="help_outline" size={size} />,
    link: Url.aboutTo("about"),
    label: "このサイトは何？",
    enLabel: "What is this?",
  },
  {
    icon: (size: number) => <GoogleFontIcon iconName="account_circle" size={size} />,
    link: Url.aboutTo("characters"),
    label: "キャラクター",
    enLabel: "Characters",
  },
  {
    icon: (size: number) => <XLogo size={size} src="/logos/x-logo.svg" />,
    link: TwitterUrl,
    label: "X",
    enLabel: "Twitter",
  },
  {
    icon: (size: number) => <SkebLogo size={size} src="/logos/skeb.svg" />,
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
      <Link to={Url.top} className={NoDecorationLinkStyle} onClick={onClick}>
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
            {content.icon(isSp ? 50 : 60)}
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
