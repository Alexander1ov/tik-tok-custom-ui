"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";

import VideoLoadAnim from "./VideoLoadAnim/VideoLoadAnim";
import VideoPlayButton from "./VideoPlayButton/VideoPlayButton";

import styles from "./Video.module.scss";
interface VideoProps {
  id: string;
  url: string;
}

const Video: FC<VideoProps> = ({ id, url }) => {
  const [plays, setPlays] = useState(false);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleProgress: ((state: OnProgressProps) => void) | undefined = ({
    loaded,
    played,
  }) => {
    if (!loaded) return;
    setProgress(played * 100);
    if(played===1){
      setPlays(!plays)
      setProgress(0)
    }
  };

  return (
    <div className={styles.video}>
      <Link href={`/video/${id}`}>
        <ReactPlayer
          width={"100%"}
          height={"720px"}
          url={url}
          playing={plays}
          // loop={true} //зацикливает видео
          onProgress={handleProgress}
          onReady={() => setReady(true)}
        />
      </Link>
      {ready ? (
        <button
          className={styles.startStopVideo}
          onClick={() => setPlays(!plays)}
        >
          <VideoPlayButton clN={styles.VideoPlayButton} play={plays} />
        </button>
      ) : (
        <VideoLoadAnim />
      )}
      <div className={styles.progress}>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Video;
