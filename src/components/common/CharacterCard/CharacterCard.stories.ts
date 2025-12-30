import type { Meta, StoryObj } from "@storybook/react-vite";
import { CharactersId } from "../../../definitions";
import { CharacterCard } from "./CharacterCard";

const kanadeShirabe = {
  id: CharactersId.KanadeShirabe,
  name: "奏 調",
  enName: "KANADE SHIRABE",
  thumbnailUrl:
    "https://image.iaproject.app/e9d14d6e-d91a-4015-8a0a-e8ae8d4ca567",
  backgroundUrl:
    "https://user0514.cdnw.net/shared/img/thumb/073Kazuki17103_TP_V.jpg",
  color: "#8A809E",
};

export default {
  component: CharacterCard,
  argTypes: {
    data: { control: { disable: true } },
  },
} as Meta<typeof CharacterCard>;

export const Basic: StoryObj<typeof CharacterCard> = {
  args: {
    data: kanadeShirabe,
  },
};

export const SpVersion: StoryObj<typeof CharacterCard> = {
  args: {
    data: kanadeShirabe,
    isSp: true,
  },
};
