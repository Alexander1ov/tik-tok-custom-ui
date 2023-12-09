import { UserData } from "@/types/types";
import { request } from "./request";

export const getUser = async (id: string | undefined): Promise<UserData> => {
  const response = await request({
    path: `user/info?unique_id=${id}`,
  });
  return response;
};
