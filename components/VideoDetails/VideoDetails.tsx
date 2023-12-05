import { FC } from "react";

import { formatNumber } from "@/constants/formatNumber";
import Heart from "../UI/VideoDetailsSvg/Heart";
import Comment from "../UI/VideoDetailsSvg/Comment";
import Bookmark from "../UI/VideoDetailsSvg/Bookmark";
import Forward from "../UI/VideoDetailsSvg/Forward";

import styles from "./VideoDetails.module.scss";
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
      img: Heart,
      amount: playCount,
    },
    {
      id: "02",
      img: Comment,
      amount: commentCount,
    },
    {
      id: "03",
      img: Bookmark,
      amount: diggCount,
    },
    {
      id: "04",
      img: Forward,
      amount: shareCount,
    },
  ];

  return (
    <ul className={styles.details}>
      {indicators.map((elem) => (
        <li key={elem.id}>
          <elem.img className={styles.svg} />
          <p>{formatNumber(elem.amount)}</p>
        </li>
      ))}
    </ul>
  );
};

export default VideoDetails;
