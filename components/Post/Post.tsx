import React, { FC } from "react";

import { VideoPosts } from "@/types/types";
import PostAuthor from "../PostAuthor/PostAuthor";
import Video from "../Video/Video";
import VideoDetails from "../Video/VideoDetails/VideoDetails";
import Music from "../UI/VideoDetailsSvg/Music";

import styles from "./Post.module.scss";

const Post: FC<VideoPosts> = ({
  video_id,
  title,
  author,
  play,
  music_info,
  play_count,
  digg_count,
  comment_count,
  share_count,
}) => {
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
      <div className={styles.info}>
        <div className={styles.music}>
          <Music className={styles.svg} />
          <p className={styles.musicName}>{music_info.title}</p>
        </div>

        <div className={styles.title}>{title}</div>
      </div>
    </article>
  );
};

export default Post;
