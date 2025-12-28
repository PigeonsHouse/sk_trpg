import { useEffect, useMemo, useRef, useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  Anchor,
  CharacterCard,
  GoogleFontIcon,
  MenuBoard,
  TopGuideBoard,
} from "../../components";
import {
  BREAK_POINT,
  FontFamily,
  FontWeight,
  SkebUrl,
  TwitterUrl,
  UiColor,
} from "../../definitions";
import type { CharacterSummary } from "../../types";

export const BrailleBlock = styled.div<{ top?: number; bottom?: number }>`
  position: absolute;
  ${(props) => (props.top ? `top: ${props.top}px;` : undefined)}
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px;` : undefined)}
  left: 0;
  right: 0;
  height: 116px;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 116px,
      white 116px,
      white 120px
    ),
    linear-gradient(
      0deg,
      ${UiColor.yellow},
      ${UiColor.yellow} 36px,
      white 36px,
      white 40px,
      ${UiColor.yellow} 40px,
      ${UiColor.yellow} 76px,
      white 76px,
      white 80px,
      ${UiColor.yellow} 80px,
      ${UiColor.yellow} 116px
    );
`;

export const Bar = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  width: 16px;
  height: 48px;
  background-color: ${UiColor.gray};
  top: 0;
  ${(props) => props.position}: 8px;
`;

export const PcAbout = () => {
  const [summary, setSummary] = useState<CharacterSummary[] | undefined>();
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  const isLoading = summary === undefined;

  const guideBoardRef = useRef<HTMLDivElement | null>(null);
  const guideBoardWidth = useMemo(() => {
    if (!guideBoardRef.current) return 0;
    return guideBoardRef.current.offsetWidth;
  }, [guideBoardRef.current]);
  const [isHideBoard, setIsHideBoard] = useState(true);
  useEffect(() => {
    const calcBreakPoint = () => {
      if (guideBoardWidth === 0) return;
      setIsHideBoard(window.innerWidth < BREAK_POINT + guideBoardWidth);
    };

    calcBreakPoint();
    window.addEventListener("resize", calcBreakPoint);
    return () => window.removeEventListener("resize", calcBreakPoint);
  }, [guideBoardWidth, setIsHideBoard]);

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `
    repeating-linear-gradient(
      transparent,
      transparent 240px,
      ${UiColor.gray} 241px,
      ${UiColor.gray} 241px
    ),
    repeating-linear-gradient(
      270deg,
      transparent,
      transparent 360px,
      ${UiColor.gray} 361px,
      ${UiColor.gray} 361px
    )`,
      }}
    >
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "relative",
            paddingTop: 48,
            margin: "0 auto",
            width: 728,
          }}
        >
          <Bar position="left" />
          <Bar position="right" />
          <div
            style={{
              height: 120,
              backgroundColor: UiColor.yellow,
              boxSizing: "border-box",
              border: `4px solid ${UiColor.darkGray}`,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 56,
                transform: "rotate(90deg)",
              }}
            >
              <GoogleFontIcon iconName="expand_circle_down" size={64} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: FontFamily.Header,
                fontWeight: FontWeight.Bold,
              }}
            >
              <span style={{ fontSize: 40 }}>このサイトは何？</span>
              <span style={{ fontSize: 24 }}>Where is this place?</span>
            </div>
          </div>
        </div>
      </div>
      <BrailleBlock top={720} />
      <BrailleBlock bottom={720} />
      <div
        style={{
          maxWidth: BREAK_POINT,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: isHideBoard ? 0 : guideBoardWidth,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 20,
            width: "100%",
            height: 0,
          }}
        >
          <MenuBoard
            disabled={!isHideBoard}
            className={css`
              position: absolute;
              width: fit-content;
              left: ${isHideBoard ? 0 : -guideBoardWidth}px;
            `}
          />
          <TopGuideBoard
            ref={guideBoardRef}
            className={css`
              top: 168px;
              position: absolute;
              opacity: ${isHideBoard ? 0 : 1};
              pointer-events: ${isHideBoard ? "none" : "unset"};
              left: ${-guideBoardWidth}px;
              z-index: 10;
            `}
          />
        </div>
        <section
          style={{
            marginTop: 280,
            display: "flex",
            flexDirection: "column",
            gap: 48,
            marginBottom: 336,
          }}
        >
          <h1
            style={{ fontSize: 88, fontFamily: FontFamily.Header, margin: 0 }}
          >
            <Anchor id="about" offset={-200} disabledScroll={isLoading} />
            What is this place?
          </h1>
          <p
            style={{
              fontSize: 32,
              letterSpacing: 2,
              lineHeight: 2,
              textAlign: "center",
              fontWeight: FontWeight.Bold,
              margin: 0,
            }}
          >
            鈴木乖離という人間が
            <br />
            TRPGで生み出した探索者のまとめサイトです。
            <br />
            かわいいうちの子を見ていってください～！
          </p>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 64,
            marginBottom: 336,
          }}
        >
          <h2
            style={{
              fontSize: 48,
              letterSpacing: 4,
              color: UiColor.black,
              fontFamily: FontFamily.Header,
              margin: 0,
              textAlign: "center",
            }}
          >
            <Anchor id="characters" offset={-200} disabledScroll={isLoading} />
            CHARACTER
          </h2>
          {summary ? (
            <div
              style={{
                display: "flex",
                gap: 48,
                flexWrap: "wrap",
                padding: "0 48px",
              }}
            >
              {summary
                .filter((character) => !character.original)
                .map((character) => (
                  <CharacterCard
                    key={character.id}
                    data={character}
                    className={css`
                      width: calc((100% - 48px) / 2);
                    `}
                  />
                ))}
            </div>
          ) : null}
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 64,
            marginBottom: 160,
          }}
        >
          <h2
            style={{
              fontSize: 48,
              letterSpacing: 4,
              color: UiColor.black,
              fontFamily: FontFamily.Header,
              margin: 0,
              textAlign: "center",
              marginBottom: 96,
            }}
          >
            CONTACT
          </h2>
          <div style={{ display: "flex", gap: 144 }}>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href={TwitterUrl}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: 200,
                  aspectRatio: 1,
                  verticalAlign: "middle",
                }}
              >
                <img
                  src="/logos/x-logo.svg"
                  style={{
                    height: "100%",
                    width: "50%",
                    verticalAlign: "middle",
                  }}
                />
              </a>
              <span
                style={{
                  fontFamily: FontFamily.Header,
                  fontSize: 32,
                  fontWeight: FontWeight.Bold,
                }}
              >
                X
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href={SkebUrl}
                style={{
                  display: "block",
                  width: 200,
                  aspectRatio: 1,
                }}
              >
                <img
                  style={{
                    width: 200,
                    aspectRatio: 1,
                    verticalAlign: "middle",
                  }}
                  src="/logos/skeb.svg"
                />
              </a>
              <span
                style={{
                  fontFamily: FontFamily.Header,
                  fontSize: 32,
                  fontWeight: FontWeight.Bold,
                }}
              >
                Skeb
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
