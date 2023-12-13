"use client";
import { FC } from "react";

import { useOneVideo } from "@/hooks/useOneVideo";
import { useComments } from "@/hooks/useComments";

import PostAuthor from "../PostAuthor/PostAuthor";
import Post from "../Post/Post";

import styles from "./VideoPage.module.scss";

import { oneVideoState } from "@/constants/fakeState/oneVideoState";
import { commentsState } from "@/constants/fakeState/commentsState";

const VideoPage: FC<{ id: string }> = ({ id }) => {
    const { data, isLoading } = useOneVideo(id);
    const { comments, loadComment } = useComments(id, 0);
  // const data = oneVideoState.data;
  // const comments = commentsState;
  // const loadComment = false;
    if (isLoading) return <span>Загрузка</span>;
  if (!data) return <span>Нет данных</span>;
  const {
    origin_cover,
    author,
    play,
    title,
    music_info,
    play_count,
    digg_count,
    comment_count,
    share_count,
  } = data;

    if(!comments){return <div>Нет коментов</div>}

  return (
    <section className={styles.section}>
      <div className={styles.video}>{id && <Post {...data} />}</div>
      <h3>Комментарии</h3>
      {loadComment ? (
        <span>Загрузка комментариев</span>
      ) : comments.length ? (
        <ul className={styles.comments}>
          {comments.map(({ user, text, id }) => (
            <li key={id}>
              <PostAuthor
                id={user.unique_id}
                name={user.nickname}
                avatar={user.avatar}
              />
              <div className={styles.text}>{text}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>нет коментариев</div>
      )}
    </section>
  );
};

export default VideoPage;
