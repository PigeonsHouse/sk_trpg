const withSansSerif = (font: string) => `"${font}", sans-serif`;

export const FontFamily = {
  Header: withSansSerif("BIZ UDGothic"),
  Bold: withSansSerif("Anton"),
  Question: withSansSerif("BIZ UDPGothic"),
  Regular: withSansSerif("Noto Sans JP"),
};
