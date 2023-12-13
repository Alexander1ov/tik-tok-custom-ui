import { CommentsFetch } from "@/types/types";
import { request } from "./request";

export const getCommentsVideo = async ({
  id,
  cursor,
}: {
  id: string | string[];
  cursor: number | undefined;
}): Promise<CommentsFetch> => {
  const path = `comment/list?url=https%3A%2F%2Fwww.tiktok.com%2F%40tiktok%2Fvideo${id}&count=10&cursor=${cursor}`;
  const response = await request({
    path,
  });
  return response;
};
