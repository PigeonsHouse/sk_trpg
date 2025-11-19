import { Link } from "react-router";
import {
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
import { RiArrowLeftUpLine } from "react-icons/ri";

export const TopGuideBoard = () => {
  return (
    <Container>
      <Link to="/" className={NoDecorationLinkStyle}>
        <TopContainer>
          <RiArrowLeftUpLine size={80} />
          <TopLabel>TOP</TopLabel>
        </TopContainer>
      </Link>
      <Link to="/about#about" className={NoDecorationLinkStyle}>
        <OneLineContainer>
          <Box />
          <TextContainer>
            <BigText>このサイトは何？</BigText>
            <SmallText>What is this?</SmallText>
          </TextContainer>
        </OneLineContainer>
      </Link>
      <Link to="/about#characters" className={NoDecorationLinkStyle}>
        <OneLineContainer>
          <Box />
          <TextContainer>
            <BigText>キャラクター</BigText>
            <SmallText>Characters</SmallText>
          </TextContainer>
        </OneLineContainer>
      </Link>
      <Link to="/about#twitter" className={NoDecorationLinkStyle}>
        <OneLineContainer>
          <Box />
          <TextContainer>
            <BigText>X</BigText>
            <SmallText>Twitter</SmallText>
          </TextContainer>
        </OneLineContainer>
      </Link>
      <Link to="/about#skeb" className={NoDecorationLinkStyle}>
        <OneLineContainer>
          <Box />
          <TextContainer>
            <BigText>Skeb</BigText>
            <SmallText>Skeb</SmallText>
          </TextContainer>
        </OneLineContainer>
      </Link>
    </Container>
  );
};
