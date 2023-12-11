import { useState, FC } from "react";
import Image from "next/image";

import { userWall } from "@/constants/userWall";

import styles from "./UserWall.module.scss";

const UserWall: FC<{ openFavorite: boolean }> = ({ openFavorite }) => {
  const [activeTab, setActive] = useState(userWall[0]);
  return (
    <>
      <div className={styles.titleWall}>
        {userWall.map((el) => (
          <h4
            key={el.name}
            onClick={() => setActive(el)}
            className={`${styles.video} ${
              activeTab.name === el.name && styles.active
            }`}
          >
            <span>{el.title}</span>
          </h4>
        ))}
      </div>
      <div className={styles.line} />

      <div className={styles.wall}>
        {!openFavorite && activeTab.name === "liked" ? (
          <div className={styles.contentHidden}>
            <Image width={150} height={150} src="/lock.svg" alt="lock" />
            <span>Пользователь скрыл список видео, которые он лайкнул</span>
          </div>
        ) : (
          <activeTab.content />
        )}
      </div>
    </>
  );
};

export default UserWall;
