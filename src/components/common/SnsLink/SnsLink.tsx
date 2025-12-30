import { SkebUrl, TwitterUrl } from "../../../definitions";
import { Circle, Container, Label, LogoImage } from "./styled";

const SnsInfo = {
  x: {
    label: "X",
    url: TwitterUrl,
    logoSrc: "/logos/x-logo.svg",
    withPadding: true,
  },
  skeb: {
    label: "Skeb",
    url: SkebUrl,
    logoSrc: "/logos/skeb.svg",
    withPadding: false,
  },
};

type SnsType = keyof typeof SnsInfo;

type SnsLinkProps = {
  className?: string;
  variant: SnsType;
  circleRadius: number;
};

export const SnsLink: React.FC<SnsLinkProps> = ({
  className,
  variant,
  circleRadius,
}) => {
  const snsInfo = SnsInfo[variant];
  return (
    <Container className={className} href={snsInfo.url} target="_blank">
      <Circle radius={circleRadius}>
        <LogoImage withPadding={snsInfo.withPadding} src={snsInfo.logoSrc} />
      </Circle>
      <Label>{snsInfo.label}</Label>
    </Container>
  );
};
