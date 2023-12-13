import { Feed } from "@/types/types";
import { request } from "./request";

export const getFeed: () => Promise<Feed> = async () => {
  const response = await request({
    path: `feed/list?region=ru&count=20`,
  });
  return response;
};
