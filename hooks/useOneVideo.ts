import useSWR from "swr";

import { getOneVideo } from "@/api/getOneVideo";

export const useOneVideo = (id: string) => {
  const { data, isLoading } = useSWR(id, getOneVideo);

  return { data: data?.data, isLoading };
};
