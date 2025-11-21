import { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { UiColor } from "../../definitions";
import type { History } from "../../types";
import { CommonFrame } from "../CommonFrame";
import {
  Title,
  FrameStyle,
  TitleContainer,
  TopBar,
  BottomBar,
  IndexCircle,
} from "./styled";

type HistoryFrameProps = {
  selectedIndex: number;
  changeIndex: (index: number) => void;
  histories: History[];
  color: string;
  selectedColor: string;
  shortId: string;
  number: number;
};

export const HistoryFrame: React.FC<HistoryFrameProps> = ({
  selectedIndex,
  changeIndex,
  histories,
  color,
  selectedColor,
  shortId,
  number,
}) => {
  const selectedHistory = useMemo(
    () => histories[selectedIndex],
    [histories, selectedIndex]
  );

  return (
    <div style={{ display: "flex", gap: 32 }}>
      <CommonFrame className={FrameStyle}>
        <TitleContainer>
          <MdLocationPin size={44} color="#4B4B4B" />
          <Title>停車駅</Title>
        </TitleContainer>
        <div style={{ overflowY: "auto", height: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 5,
                height: 60 * (histories.length - 1),
                backgroundColor: UiColor.gray,
                left: 11,
                top: 21,
              }}
            />
            {histories.map((history, idx) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: 8 }}
                onClick={() => changeIndex(idx)}
              >
                <div
                  style={{
                    width: idx === selectedIndex ? 28 : 18,
                    height: idx === selectedIndex ? 28 : 18,
                    backgroundColor:
                      idx === selectedIndex ? selectedColor : "white",
                    margin: idx === selectedIndex ? 0 : 5,
                    border: `5px solid ${UiColor.gray}`,
                    borderRadius: 4,
                    boxSizing: "border-box",
                    zIndex: 1,
                  }}
                />
                <IndexCircle color={color}>{idx + 1}</IndexCircle>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    marginTop: -8,
                  }}
                >
                  {history.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <TopBar />
        <BottomBar />
        <div
          style={{
            backgroundColor: selectedColor,
            fontFamily: '"BIZ UDGothic"',
            width: 260,
            height: 160,
            position: "absolute",
            fontWeight: "bold",
            fontSize: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            left: -300,
            bottom: -70,
          }}
        >
          <div>{shortId}</div>
          <div>{`#${String(number).padStart(2, "0")}`}</div>
        </div>
      </CommonFrame>
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            width: "100%",
            backgroundColor: color,
            borderRadius: 20,
            padding: 36,
            paddingLeft: 72,
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              borderStyle: "solid",
              borderWidth: "28px 48px",
              borderLeftWidth: 0,
              borderColor: "transparent",
              borderRightColor: color,
              left: -48,
              top: 60,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 28,
            }}
          >
            <img
              src={selectedHistory.iconUrl}
              style={{
                height: 100,
                width: 100,
                backgroundColor: "white",
                borderRadius: 9999,
                flexShrink: 0,
              }}
            />
            <div
              style={{
                color: "white",
                whiteSpace: "pre-wrap",
                fontSize: 12,
                lineHeight: "20px",
              }}
            >
              {selectedHistory.comment}
            </div>
          </div>
          {selectedHistory.companions.length > 0 && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: "16px 24px",
                paddingBottom: 32,
              }}
            >
              <h4 style={{ fontSize: 24, margin: 0 }}>同行者</h4>
              <div
                style={{ display: "flex", gap: 26, justifyContent: "center" }}
              >
                {selectedHistory.companions.map((companion) => (
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <img
                      src={companion.iconUrl}
                      style={{ width: 64, height: 64, borderRadius: 9999 }}
                    />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 27, fontWeight: "bold" }}>
                        {companion.name}
                      </div>
                      <div
                        style={{
                          fontSize: 8,
                          fontFamily: "Impact",
                        }}
                      >
                        {companion.enName}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
