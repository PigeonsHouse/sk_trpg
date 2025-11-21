export type CharacterSummary = {
  id: string;
  name: string;
  enName: string;
  thumbnailUrl: string;
  backgroundUrl: string;
  color: string;
};

export type Profile = {
  description: string;
  age: string;
  sex: string;
  height: string;
  weight: string;
  job: string;
  like: string;
  hobby: string;
};

type Coc6Status = {
  type: "CoC6版";
  str: number;
  con: number;
  pow: number;
  dex: number;
  app: number;
  int: number;
  edu: number;
  san: number;
  hp: number;
  mp: number;
  db: string;
  luck: number;
  idea: number;
  knowledge: number;
};

export type Status = Coc6Status;

export type Skills = {
  [skill: string]: number;
};

export type History = {
  title: string;
  comment: string;
  iconUrl: string;
  companions: {
    name: string;
    enName: string;
    iconUrl: string;
  }[];
};

export type CharacterDetail = {
  number: number;
  name: string;
  enName: string;
  shortId: string;
  thumbnailUrl: string;
  colorPalette: string[];
  backgroundUrl: string;
  profile: Profile;
  spritesUrl: string[];
  status: Status;
  skills: Skills;
  histories: History[];
  qa: {
    question: string;
    answer: string;
  };
  comment: string;
  artGallery: string[];
};
