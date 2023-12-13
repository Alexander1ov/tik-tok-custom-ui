import { VideoOrigin } from "@/types/types";
import { request } from "./request";

export const getOneVideo = async (id: string): Promise<VideoOrigin> => {
  const response = await request({
    path: `?url=https%3A%2F%2Fwww.tiktok.com%2F%40tiktok%2Fvideo${id}&hd=1`,
  });
  return response;
};
