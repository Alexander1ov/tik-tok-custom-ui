import useSWR from "swr";

import { getUser } from "@/api/getUser";

export const useUser = (id: string | undefined) => {
  const { data, isLoading } = useSWR(id, getUser);
  return {
    data: data?.data,
    code: data?.code,
    error: data?.msg,
    isLoading,
  };
};
