import useSWR from "swr";

import { getUserFavorite } from "@/api/getUserFavorite";

export const useUserFavorite = (id: string | string[], cursor: number) => {
  const { data, isLoading, error } = useSWR({ id, cursor }, getUserFavorite);
  return {
    data,
    isLoading,
    error,
  };
};
