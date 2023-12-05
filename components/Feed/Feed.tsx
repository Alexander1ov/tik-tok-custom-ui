"use client";
import { FC } from "react";
import { useVideoFeed } from "@/hooks/useVideoFeed";
import Post from "../Post/Post";
import { videoState } from "@/constants/videoState";
import style from "./Feed.module.scss";
import { request } from "@/utils/request";
import { Feed, VideoPosts } from "@/types/types";

// async function getVideoFeed() {
//   const response = request({
//     path: `feed/list?region=ru&count=20`, //сделать регион динамически...
//   });
//   return response;
// }

export default  function VideoFeed() {
  // const { data, isLoading } = useVideoFeed();
  const data = videoState; //т.к количество запросов ограничено
  // const data: VideoPosts[] = await getVideoFeed()
  console.log(data);
  return (
    <section className={style.videoFeed}>
      {data.map((elem) => (
        <Post key={elem.video_id} {...elem} />
      ))}
    </section>
  );
}
