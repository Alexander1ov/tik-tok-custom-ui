import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./PostAuthor.module.scss";

interface PostAuthorProps {
  id: string;
  name: string;
  avatar: string;
}

const PostAuthor: FC<PostAuthorProps> = ({ id, name, avatar }) => {
  return (
    <>
      <Link href={`/user/${id}`}>
        <Image
          className={styles.avatar}
          src={avatar}
          alt="avatar"
          width={55}
          height={55}
          priority
        />
        <p className={styles.name}>{name}</p>
        <div className={styles.info}>
          <p>@{id}</p>
        </div>
      </Link>
    </>
  );
};

export default PostAuthor;
