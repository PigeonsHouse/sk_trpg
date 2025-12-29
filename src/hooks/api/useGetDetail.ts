import { useQuery } from "@tanstack/react-query";
import type { CharacterDetail } from "../../types";

const getDetail = async (fileId: string) => {
  const response = await fetch(`/data/characters/${fileId}.json`);
  const data: CharacterDetail = await response.json();
  return data;
};

export const useGetDetail = (fileId: string, enabled: boolean) => {
  return useQuery({
    queryKey: ["detail", fileId],
    queryFn: () => getDetail(fileId),
    enabled,
  });
};
