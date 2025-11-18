export type CharacterSummary = {
  id: string;
  name: string;
  enName: string;
  thumbnailUrl: string;
  color: string;
};

type Coc6Status = {
  type: "CoC6版";
  STR: number;
  CON: number;
  POW: number;
  DEX: number;
  APP: number;
  INT: number;
  EDU: number;
  SAN: number;
  HP: number;
  MP: number;
  DB: string;
  LUCK: number;
  IDEA: number;
  KNOWLEDGE: number;
};

type Status = Coc6Status;

export type CharacterDetail = {
  name: string;
  enName: string;
  thumbnailUrl: string;
  colorPalette: string[];
  iconUrl: string;
  profile: {
    description: string;
    age: string;
    sex: string;
    height: string;
    weight: string;
    job: string;
    like: string;
    hobby: string;
  };
  spritesUrl: {
    big: string[];
  };
  status: Status;
  skills: {
    [skill: string]: number;
  };
  history: {
    title: string;
    comment: string;
    companions: {
      name: string;
      enName: string;
      iconUrl: string;
    }[];
  }[];
  qa: {
    question: string;
    answer: string;
  };
  comment: string;
  artGallery: string[];
};
