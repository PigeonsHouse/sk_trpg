import { useEffect, useRef, useState } from "react";

// wheelイベントのdeltaYを何度の回転に変換するか
const WHEEL_SENSITIVITY = 0.5;
// 縦スワイプの移動量(px)を何度の回転に変換するか
const TOUCH_SENSITIVITY = 0.6;

/**
 * 色相環を「スクロール」(マウスホイール/トラックパッド、指の縦スワイプ)で回転させる。
 * ReactのonWheel/onTouchMoveはパフォーマンスのためpassiveで登録されpreventDefaultが効かないため、
 * ページの縦スクロールを奪えるようネイティブのaddEventListenerをpassive: falseで貼る。
 */
export const useWheelScroll = () => {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ clientY: number; rotation: number } | null>(null);

  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;

    const applyRotation = (value: number) => {
      rotationRef.current = value;
      setRotation(value);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      applyRotation(rotationRef.current + e.deltaY * WHEEL_SENSITIVITY);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        clientY: e.touches[0].clientY,
        rotation: rotationRef.current,
      };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStart.current) return;
      e.preventDefault();
      const delta = e.touches[0].clientY - touchStart.current.clientY;
      applyRotation(touchStart.current.rotation + delta * TOUCH_SENSITIVITY);
    };

    const onTouchEnd = () => {
      touchStart.current = null;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return { rotation, wheelRef };
};
