import { UserVideo } from "@/types/types";
import { request } from "./request";

export const getUserFavorite = async ({
  id,
  cursor,
}: {
  id: string | string[];
  cursor: number | undefined;
}): Promise<UserVideo> => {
  const path = `user/favorite?unique_id=${id}&count=35&cursor=${cursor}`;
  const response = await request({
    path,
  });
  return response;
};
