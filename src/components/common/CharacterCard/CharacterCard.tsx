import type React from "react";
import { Link } from "react-router";
import { cx } from "@emotion/css";
import { FontFamily, FontWeight, Url } from "../../../definitions";
import type { CharacterSummary } from "../../../types";
import { NoDecorationLinkStyle } from "./styled";

type CharacterCardProps = {
  className?: string;
  data: CharacterSummary;
  isSp?: boolean;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({
  className,
  data,
  isSp,
}) => {
  return (
    <Link
      to={Url.characterTo(data.id)}
      className={cx(NoDecorationLinkStyle, className)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            aspectRatio: 1.414 / 1,
            backgroundImage: `url(${data.backgroundUrl})`,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: data.color,
              opacity: 0.3,
            }}
          />
          <img
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={data.thumbnailUrl}
          />
        </div>
        <div
          style={{
            fontWeight: FontWeight.Bold,
            textAlign: "center",
            fontSize: isSp ? 24 : 32,
            fontFamily: FontFamily.Header,
          }}
        >
          {data.name}
        </div>
      </div>
    </Link>
  );
};
