import useSWR from "swr";
import { Feed } from "@/types/types";
import { request } from "@/utils/request";

const getFeed: () => Promise<Feed> = async () => {
  const response = await request({
    path: `feed/list?region=ru&count=20`, //сделать регион динамически...
  });
  return response;
};

export const useVideoFeed = () => {
  const { data, isLoading } = useSWR("videoFeed", getFeed);

  return { data: data?.data || [], isLoading };
};
