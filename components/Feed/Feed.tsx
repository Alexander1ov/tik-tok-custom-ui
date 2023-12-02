"use client";
import { FC } from "react";
import { useVideoFeed } from "@/hooks/useVideoFeed";
import Post from "../Post/Post";
import { videoState } from "@/constants/videoState";
import style from "./Feed.module.scss";

const FeedListVideo: FC = () => {
  // const { data, isLoading } = useVideoFeed();
  const data = videoState; //т.к количество запросов ограничено
  console.log(data);
  return (
    <section className={style.videoFeed}>
      {data.map((elem) => (
        <Post
          key={elem.video_id}
          {...elem} 

        />
      ))}
    </section>
  );
};

export default FeedListVideo;
