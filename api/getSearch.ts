import { Search } from "@/types/types";
import { request } from "./request";

export const getSearch = async ({
  keywords,
  cursor,
}: {
  keywords: string | null;
  cursor: number | undefined;
}): Promise<Search> => {
  const response = await request({
    path: `feed/search?keywords=${keywords}&count=10&cursor=${cursor}&region=ru`,
  });
  return response;
};
