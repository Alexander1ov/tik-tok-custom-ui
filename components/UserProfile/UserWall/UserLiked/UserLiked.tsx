import { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { VideoPosts } from "@/types/types";
import { useUserFavorite } from "@/hooks/useUserFavorite";

import styles from "./UserLiked.module.scss";

import { userWallState } from "@/constants/fakeState/userWallState";
import ButtonRed from "@/components/UI/ButtonRed/ButtonRed";
import Post from "@/components/Post/Post";

const UserLiked: FC = () => {
  const [items, setItems] = useState<VideoPosts[]>([]);
  const [cursor, setCursor] = useState(0);
  const { id } = useParams();

//   const { data, isLoading, error } = useUserFavorite(id, cursor);
    const data = userWallState;
  console.log(data);

  useEffect(() => {
    const currentVideo = data?.data.videos || [];
    if (!currentVideo?.length) return;
    setItems((prev) => [...prev, ...currentVideo]);
  }, [data]);

  // if (isLoading) return <span>Загрузка</span>;
  // if (error || data.code === -1) return <span>Ошибка</span>; // или data.msg

  const handleLoadMore = () => {
    setCursor(Number(data?.data.cursor));
    console.log(data);
  };

  return (
    <div className={styles.favoriteContent}>
      {items.length ? (
        items.map((video) => <Post key={video.video_id} {...video} />)
      ) : (
        <span>Видео нет</span>
      )}
      {data?.data.hasMore && <ButtonRed act={handleLoadMore} text="Еще..." />}
    </div>
  );
};

export default UserLiked;
