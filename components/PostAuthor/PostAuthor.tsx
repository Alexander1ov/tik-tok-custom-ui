import React, { FC } from "react";

import styles from "./PostAuthor.module.scss";
import Link from "next/link";

interface PostAuthorProps {
  id: string;
  name: string;
  avatar: string;
}

const PostAuthor: FC<PostAuthorProps> = ({ id, name, avatar }) => {
  return (
    <Link href={`/user/${id}`} className={styles.author}>
      <div className={styles.avatar}>
        {/* <img src={avatar} alt="" /> */}
      </div>
      <div className={styles.info}>
        <p>{name}</p>
        <p>{id}</p>
      </div>
    </Link>
  );
};

export default PostAuthor;
