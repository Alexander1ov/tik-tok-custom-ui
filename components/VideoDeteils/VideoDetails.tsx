import React, { FC } from "react";

import styles from "./VideoDetails.module.scss";
import { formatNumber } from "@/constants/formatNumber";

interface VideoDetailsProps {
  playCount: number;
  diggCount: number;
  commentCount: number;
  shareCount: number;
}

const VideoDetails: FC<VideoDetailsProps> = ({
  playCount,
  diggCount,
  commentCount,
  shareCount,
}) => {
  const indicators = [
    {
      id: "01",
      img: `${process.env.PUBLIC_URL}/playCount.svg`,
      amount: playCount,
    },
    {
      id: "02",
      img: `${process.env.PUBLIC_URL}/commentCount.svg`,
      amount: commentCount,
    },
    {
      id: "03",
      img: `${process.env.PUBLIC_URL}/diggCount.svg`,
      amount: diggCount,
    },
    {
      id: "04",
      img: `${process.env.PUBLIC_URL}/shareCount.svg`,
      amount: shareCount,
    },
  ];

  return (
    <ul className={styles.details}>
      {indicators.map((elem) => (
        <li key={elem.id}>
          {/* <img src={elem.img} alt="" /> */}
          <p>{formatNumber(elem.amount).toLowerCase()}</p>
        </li>
      ))}
    </ul>
  );
};

export default VideoDetails;
