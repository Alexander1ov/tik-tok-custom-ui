import { useState } from "react";
import useSWR from "swr";

import { getSearch } from "@/api/getSearch";

export const useVideoSearch = (keywords: string|null, cursor: number) => {
  const { data, isLoading, error } = useSWR({ keywords, cursor }, getSearch);
  return {
    data: data?.data.videos || [],
    next: data?.data.hasMore,
    isLoading,
    error,
  };
};
