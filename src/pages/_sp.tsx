import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Anchor, CharacterCard, MenuBoard } from "../components";
import {
  FontFamily,
  FontWeight,
  SkebUrl,
  SP_MAX_WIDTH,
  TwitterUrl,
  UiColor,
} from "../definitions";
import type { CharacterSummary } from "../types";
import { SpMarginContainer } from "./styled";

export const BrailleBlock = styled.div<{ top?: number; bottom?: number }>`
  position: absolute;
  ${(props) => (props.top ? `top: ${props.top}px;` : undefined)}
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px;` : undefined)}
  left: 0;
  right: 0;
  height: 67px;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 70px,
      white 70px,
      white 74px
    ),
    linear-gradient(
      0deg,
      ${UiColor.yellow},
      ${UiColor.yellow} 21px,
      white 21px,
      white 23px,
      ${UiColor.yellow} 23px,
      ${UiColor.yellow} 44px,
      white 44px,
      white 46px,
      ${UiColor.yellow} 46px,
      ${UiColor.yellow} 67px
    );
`;

export const SpTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // PCページからのリサイズや直接URL指定時にスクロール位置を調整
    const vh = document.documentElement.clientHeight;
    const isManual = !location.state?.fromScroll;
    if (window.location.pathname === "/about" && window.location.hash === "") {
      const isNotAtTarget = window.scrollY < vh / 2;
      if (isNotAtTarget || isManual) {
        window.scrollBy({
          top: vh - window.scrollY,
          behavior: "smooth",
        });
      }
    } else if (window.location.pathname === "/") {
      const isNotAtTarget = window.scrollY > vh / 2;
      if (isNotAtTarget || isManual) {
        window.scrollBy({
          top: -window.scrollY,
          behavior: "smooth",
        });
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    // TOPページのDOM(100vh部分)半分過ぎたらURLを書き換える
    const callback = () => {
      const targetPath =
        window.scrollY > document.documentElement.clientHeight / 2
          ? "/about"
          : "/";
      if (window.location.pathname !== targetPath) {
        navigate(targetPath, { replace: true, state: { fromScroll: true } });
      }
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, [navigate]);

  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  return (
    <div>
      <MenuBoard
        isSp
        className={css`
          position: fixed;
          right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 16px);
          z-index: 50;
        `}
      />
      <div
        style={{
          height: "100dvh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#8A809E",
          // backgroundImage: `url(/images/KanadeShirabe/icon/kanadeshirabe_icon_1.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#fff2" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#fff9",
          }}
        >
          <SpMarginContainer
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                whiteSpace: "pre-wrap",
                margin: 0,
                fontFamily: FontFamily.Header,
                fontSize: 48,
                marginLeft: 16,
              }}
            >{`鈴木乖離の\n探索者サイト`}</h1>
          </SpMarginContainer>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <BrailleBlock top={280} />
        <BrailleBlock bottom={520} />
        <SpMarginContainer>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 56,
              paddingTop: 56,
              marginBottom: 200,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 32,
                fontFamily: FontFamily.Header,
              }}
            >
              <Anchor id="about" offset={-116} />
              Where is this?
            </h2>
            <p
              style={{
                whiteSpace: "pre-wrap",
                margin: 0,
                fontSize: 12,
                fontWeight: FontWeight.Bold,
                textAlign: "center",
                lineHeight: 2,
              }}
            >
              {`鈴木乖離という人間が\nTRPGで生み出した探索者のまとめサイトです。\nかわいいうちの子を見て行ってください～！`}
            </p>
          </section>
          <section style={{ marginBottom: 200 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 32,
                fontFamily: FontFamily.Header,
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              <Anchor id="characters" offset={-116} />
              CHARACTER
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              {summary
                .filter((character) => !character.original)
                .map((character) => (
                  <CharacterCard
                    key={character.id}
                    data={character}
                    className={css`
                      width: 320px;
                    `}
                  />
                ))}
            </div>
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 48,
              marginBottom: 32,
            }}
          >
            <h2
              style={{ margin: 0, fontSize: 32, fontFamily: FontFamily.Header }}
            >
              CONTACT
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
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
                    width: 128,
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
                    width: 128,
                    aspectRatio: 1,
                  }}
                >
                  <img
                    style={{
                      width: 128,
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
        </SpMarginContainer>
      </div>
    </div>
  );
};
