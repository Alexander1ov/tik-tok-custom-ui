"use client";
import { FC } from "react";
import { useVideoFeed } from "@/hooks/useVideoFeed";
import Post from "../Post/Post";
import { videoState } from "@/constants/fakeState/videoState";
import style from "./Feed.module.scss";
import { request } from "@/api/request";
import { Feed, VideoPosts } from "@/types/types";

export default function Feed() {
  const { data, isLoading } = useVideoFeed();
  // const data = videoState; //т.к количество запросов ограничено
  return (
    <section className={style.videoFeed}>
      {data.map((elem) => (
        <Post key={elem.video_id} {...elem} />
      ))}
    </section>
  );
}
