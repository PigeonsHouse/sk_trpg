const withSansSerif = (font: string) => `"${font}", sans-serif`;

export const FontFamily = {
  Header: withSansSerif("BIZ UDPGothic"),
  Bold: withSansSerif("Anton"),
  Regular: withSansSerif("Noto Sans JP"),
};
