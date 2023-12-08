import useSWR from "swr";

import { getFeed } from "@/api/getFeed";

export const useVideoFeed = () => {
  const { data, isLoading } = useSWR("videoFeed", getFeed);
  return { data: data?.data || [], isLoading };
};
