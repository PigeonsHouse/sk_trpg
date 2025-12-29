import { useEffect, useState } from "react";

export const useDefined = <T>(value: T | undefined) => {
  const [val, setVal] = useState<T | undefined>(undefined);
  useEffect(() => {
    if (value !== undefined) {
      setVal(value);
    }
  }, [value]);
  return val;
};
