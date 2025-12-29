import { useQuery } from "@tanstack/react-query";
import type { CharacterSummary } from "../../types";

const getSummary = async () => {
  const response = await fetch("/data/characters.json");
  const data: CharacterSummary[] = await response.json();
  return data;
};

export const useGetSummary = () => {
  return useQuery({ queryKey: ["summary"], queryFn: getSummary });
};
