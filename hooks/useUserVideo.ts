import useSWR from "swr";

import { getUserVideo } from "@/api/getUserVideo";

export const useUserVideo = (id: string | string[], cursor: number) => {
  const { data, isLoading, error } = useSWR({ id, cursor }, getUserVideo);
  return {
    data,
    isLoading,
    error,
  };
};
