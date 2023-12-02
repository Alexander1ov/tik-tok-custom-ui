import React, { FC } from "react";

import { VideoPosts } from "@/types/types";
import PostAuthor from "../PostAuthor/PostAuthor";
import Video from "../Video/Video";
import VideoDetails from "../VideoDeteils/VideoDetails";

import styles from "./Post.module.scss";

const Post: FC<VideoPosts> = ({
  //не только для поста, но и для поиска его сделать
  video_id,
  title,
  author,
  play,
  music,
  play_count,
  digg_count,
  comment_count,
  share_count,
}) => {
  //ЗДЕСЬ СДЕЛАЮ МАССИВ С ИКОНКАМИ, ЧТОБЫ ПОТОМ НАКИНУТЬ НА УПРАВЛЕНИЕ ВИДЕО...но это не точно
  return (
    <article className={styles.post}>
      <PostAuthor
        id={author.unique_id}
        name={author.nickname}
        avatar={author.avatar}
      />
      <div className={styles.content}>
        <Video id={video_id} url={play} />

        <VideoDetails
          playCount={play_count}
          diggCount={digg_count}
          commentCount={comment_count}
          shareCount={share_count}
        />
      </div>
      <div className={styles.music}>
        <span>Original:</span>
        {/* <MusicNote/> */}
        <p className={styles.musicName}>{music}</p>
      </div>

      <div className={styles.title}>{title}</div>
    </article>
  );
};

export default Post;
