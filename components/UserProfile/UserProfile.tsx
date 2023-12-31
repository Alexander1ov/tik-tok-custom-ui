"use client";
import React, { FC } from "react";
import Image from "next/image";

import { useUser } from "@/hooks/useUser";
import { formatNumber } from "@/constants/formatNumber";
import { replaceBr } from "@/constants/replaceBr";

import styles from "./UserProfile.module.scss";

import { userState } from "@/constants/fakeState/userState";
import UserWall from "./UserWall/UserWall";

const UserProfile: FC<{ id: string }> = ({ id }) => {
  const { data, code, error, isLoading } = useUser(id);
  if(!data)return <div>Нет данных</div>
  // const data = userState;
  // const isLoading = true;
  const count = [
    {
      id: "01",
      title: "Подписки",
      quantity: data?.stats.followingCount,
    },
    {
      id: "02",
      title: "Подписчики",
      quantity: data?.stats.followerCount,
    },
    {
      id: "03",
      title: "Лайки",
      quantity: data?.stats.heartCount,
    },
    {
      id: "04",
      title: "Видео",
      quantity: data?.stats.videoCount,
    },
  ];

  return (
    <section className={styles.section}>
      {isLoading && <div>Loading...</div>}
      {code === -1 && <div>{error || "Пользователь не найден"}</div>}

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image
            src={data?.user.avatarMedium}
            width={300}
            height={300}
            alt="avatar"
            priority
          />
          <div className={styles.info}>
            <h3>@{id}</h3>
            <p>{data?.user.nickname}</p>
          </div>
        </div>
        <ul className={styles.statistic}>
          {count.map(({ id, title, quantity }) => (
            <li key={id}>
              <span>{formatNumber(Number(quantity))}</span>
              <p>{title}</p>
            </li>
          ))}
        </ul>
        <div className={styles.status}>
          {!!data?.user.signature && (
            <span
              dangerouslySetInnerHTML={{
                __html: replaceBr(data.user.signature),
                // соответствует innerHtml в react
              }}
            />
          )}
        </div>
      </div>
      {!data?.user.privateAccount ? (
        <UserWall openFavorite={data?.user.openFavorite} />
      ) : (
        <div className={styles.contentHidden}>
          <Image width={150} height={150} src="/lock.svg" alt="lock" />
          <span>Это закрытый аккаунт, невозможно отобразить ленту :(</span>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
