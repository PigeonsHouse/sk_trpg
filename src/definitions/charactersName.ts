export const CharactersId = {
  KanadeShirabeStudent: "kanade-shirabe-student",
  KanadeShirabe: "kanade-shirabe",
  KanadeShirabeAdult: "kanade-shirabe-adult",
  KanadeKotoko: "kanade-kotoko",
  SaotomeKaito: "saotome-kaito",
  SonKleinbeck: "son-kleinbeck",
  SasugaKiara: "sasuga-kiara",
  AmiraKamal: "amira-kamal",
  SarashinaKenji: "sarashina-kenji",
  ShiomiKen: "shiomi-ken",
  ShuangJu: "shuang-ju",
  SaotomeKaren: "saotome-karen",
  ShikiKuryu: "shiki-kuryu",
  SaishikiKei: "saishiki-kei",
  ScarletKrieger: "scarlet-krieger",
  SatogashimaKumako: "satogashima-kumako",
} as const;

export type CharactersId = (typeof CharactersId)[keyof typeof CharactersId];
