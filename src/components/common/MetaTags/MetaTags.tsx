import { Helmet } from "react-helmet-async";
import { APP_NAME } from "../../../definitions";

const SITE_URL = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "";
const DEFAULT_DESCRIPTION =
  "鈴木乖離という人間がTRPGで生み出したプレイキャラクターのまとめサイトです。";
const DEFAULT_IMAGE_URL = "/images/SuzukiKairi/icon.png";

const toAbsoluteUrl = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (!SITE_URL) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const normalizeDescription = (description: string) =>
  description.replace(/\s+/g, " ").trim();

type MetaTagsProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  path?: string;
  type?: "website" | "article";
};

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = APP_NAME,
  description = DEFAULT_DESCRIPTION,
  imageUrl = DEFAULT_IMAGE_URL,
  path = "/",
  type = "website",
}) => {
  const normalizedDescription = normalizeDescription(description);
  const url = toAbsoluteUrl(path);
  const image = toAbsoluteUrl(imageUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={normalizedDescription} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={normalizedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={normalizedDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
