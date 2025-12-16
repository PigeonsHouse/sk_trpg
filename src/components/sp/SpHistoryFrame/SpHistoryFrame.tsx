import { useCallback, useMemo, useState } from "react";
import { css, cx } from "@emotion/css";
import {
  DropShadowFilter,
  FontFamily,
  FontWeight,
  SP_MAX_WIDTH,
  UiColor,
} from "../../../definitions";
import type { History } from "../../../types";
import { CommonFrame, GoogleFontIcon, NameContainer } from "../../common";
import { CompanionNameStyle, FrameStyle, IndexCircle, Title } from "./styled";

type SpHistoryFrameProps = {
  className?: string;
  histories: History[];
  mainColor: string;
  selectedColor: string;
  selectedHistoryIndex: number;
  setSelectedHistoryIndex: (index: number) => void;
  isBackdropOpen: boolean;
  onSwitchBackdropOpen: (isOpen: boolean) => void;
};

export const SpHistoryFrame: React.FC<SpHistoryFrameProps> = ({
  className,
  histories,
  mainColor,
  selectedColor,
  selectedHistoryIndex,
  setSelectedHistoryIndex,
  isBackdropOpen,
  onSwitchBackdropOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenWithBackdrop = useMemo(
    () => isOpen && isBackdropOpen,
    [isOpen, isBackdropOpen]
  );
  const onSwitchMenu = useCallback(
    (isOpen: boolean) => {
      setIsOpen(isOpen);
      if (onSwitchBackdropOpen) {
        onSwitchBackdropOpen(isOpen);
      }
    },
    [isOpenWithBackdrop, onSwitchBackdropOpen]
  );

  return (
    <>
      <CommonFrame className={cx(FrameStyle, className)}>
        <Title>
          <GoogleFontIcon
            iconName="fmd_good"
            size={32}
            color={UiColor.darkGray}
          />
          停車駅
        </Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            position: "relative",
          }}
        >
          {histories.map((history, i) => (
            <button
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: 0,
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedHistoryIndex(i);
                onSwitchMenu(true);
              }}
            >
              <div
                style={{
                  width: selectedHistoryIndex === i ? 24 : 18,
                  margin: selectedHistoryIndex === i ? 0 : 3,
                  backgroundColor:
                    selectedHistoryIndex === i ? selectedColor : "white",
                  aspectRatio: 1,
                  boxSizing: "border-box",
                  border: `6px solid ${UiColor.gray}`,
                  borderRadius: 4,
                  flexShrink: 0,
                  zIndex: 1,
                }}
              />
              <IndexCircle borderColor={mainColor}>{i + 1}</IndexCircle>
              <h3
                style={{
                  fontFamily: FontFamily.Header,
                  margin: 0,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {history.title}
              </h3>
            </button>
          ))}
          <div
            style={{
              width: 6,
              backgroundColor: UiColor.gray,
              position: "absolute",
              top: 24 - 3,
              left: 12 - 3,
              height: 6 + (histories.length - 1) * (48 + 8),
            }}
          />
        </div>
      </CommonFrame>
      {isOpenWithBackdrop && (
        <div
          style={{
            inset: 0,
            position: "fixed",
            width: SP_MAX_WIDTH - 32,
            height: "fit-content",
            backgroundColor: mainColor,
            borderRadius: 16,
            zIndex: 60,
            margin: "auto",
            filter: DropShadowFilter,
            padding: 32,
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              color: "white",
              fontFamily: FontFamily.Header,
              fontSize: 24,
              margin: 0,
              fontWeight: "initial",
            }}
          >
            COMMENT
          </h3>
          <img
            src={histories[selectedHistoryIndex].iconUrl}
            style={{
              display: "block",
              margin: "0 auto",
              width: 100,
              aspectRatio: 1,
              borderRadius: "50%",
              backgroundColor: "white",
              marginBottom: 8,
            }}
          />
          <div style={{ marginBottom: 20 }}>
            <span style={{ fontSize: 12, color: "white" }}>
              {histories[selectedHistoryIndex].comment}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: 24,
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                margin: 0,
                textAlign: "center",
                fontSize: 16,
                fontFamily: FontFamily.Header,
                marginBottom: 16,
              }}
            >
              同行者
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {histories[selectedHistoryIndex].companions.map(
                (companion, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <img
                        src={companion.iconUrl}
                        style={{
                          width: 40,
                          aspectRatio: 1,
                          borderRadius: "50%",
                          backgroundColor: companion.color,
                        }}
                      />
                      <NameContainer
                        name={companion.name}
                        enName={companion.enName}
                        className={CompanionNameStyle}
                        isSp
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: mainColor,
                      }}
                    >
                      <GoogleFontIcon
                        iconName="spatial_audio_off"
                        size={24}
                        color={mainColor}
                        className={css`
                          transform: scaleX(-1);
                        `}
                      />
                      <span>{companion.nickName}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <button
            style={{
              position: "absolute",
              padding: 0,
              border: "none",
              backgroundColor: "white",
              aspectRatio: 1,
              width: 48,
              borderRadius: "50%",
              filter: DropShadowFilter,
              top: -16,
              right: -16,
              cursor: "pointer",
            }}
            onClick={() => onSwitchMenu(false)}
          >
            <GoogleFontIcon
              iconName="close"
              size={24}
              color={mainColor}
              className={css`
                font-weight: ${FontWeight.Bold};
              `}
            />
          </button>
        </div>
      )}
    </>
  );
};
