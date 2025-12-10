export const calcNameSize = (name: string) => {
  if (name.length < 8) {
    return "lg";
  } else if (name.length < 12) {
    return "md";
  } else {
    return "sm";
  }
};
