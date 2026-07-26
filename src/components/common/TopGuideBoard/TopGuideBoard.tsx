import { cx } from "@emotion/css";
import type React from "react";
import { Link } from "react-router";
import { Url } from "../../../definitions";
import { GoogleFontIcon } from "../GoogleFontIcon";
import {
  ArrowStyle,
  BigText,
  Container,
  DisabledMenuItemStyle,
  NoDecorationLinkStyle,
  OneLineContainer,
  SmallText,
  TextContainer,
  TopContainer,
  TopLabel,
} from "./styled";

type MenuContent = {
  icon: (size: number) => React.ReactNode;
  link?: string;
  label: string;
  enLabel: string;
  disabled?: boolean;
};

const menuContents: MenuContent[] = [
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
    icon: (size: number) => <GoogleFontIcon iconName="info_outline" size={size} />,
    link: Url.aboutTo("profile"),
    label: "プロフィール",
    enLabel: "Profile",
  },
  {
    icon: (size: number) => <GoogleFontIcon iconName="menu_book" size={size} />,
    label: "読み物",
    enLabel: "Coming Soon",
    disabled: true,
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
        const menuContentDom = (
          <OneLineContainer>
            {content.icon(isSp ? 50 : 60)}
            <TextContainer>
              <BigText isSp={isSp}>{content.label}</BigText>
              <SmallText isSp={isSp}>{content.enLabel}</SmallText>
            </TextContainer>
          </OneLineContainer>
        );

        if (content.disabled || !content.link) {
          return (
            <div
              key={idx}
              className={cx(NoDecorationLinkStyle, DisabledMenuItemStyle)}
            >
              {menuContentDom}
            </div>
          );
        }

        return (
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
