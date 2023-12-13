import useSWR from "swr";

import { getCommentsVideo } from "@/api/getCommentsVideo";

export const useComments = (id: string | string[], cursor: number) => {
  const { data, isLoading } = useSWR({ id, cursor }, getCommentsVideo);
  return {
    comments: data?.data.comments || [],
    loadComment: isLoading,
  };
};
