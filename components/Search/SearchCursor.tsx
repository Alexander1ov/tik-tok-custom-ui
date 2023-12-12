import React, { FC } from "react";

import { videoState } from "@/constants/fakeState/videoState";
import { useVideoSearch } from "@/hooks/useVideoSearch";

import Post from "@/components/Post/Post";

interface SearchCursorProps {
  cursor: number;
  search: string | null;
}

const SearchCursor: FC<SearchCursorProps> = ({ cursor, search }) => {
  // const { data, isLoading, next } = useVideoSearch(search, cursor);
  const data = videoState; //т.к количество запросов ограничено

  return (
    <>
      {data.map((elem) => (
        <Post key={elem.video_id} {...elem} />
      ))}
    </>
  );
};

export default SearchCursor;
