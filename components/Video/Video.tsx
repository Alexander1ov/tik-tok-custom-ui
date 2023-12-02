import React, { FC, useState } from "react";
import ReactPlayer from "react-player";

import styles from "./Video.module.scss";
import { OnProgressProps } from "react-player/base";
import Link from "next/link";
import Image from "next/image";

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
  };
  return (
    <div className={`${styles.video} ${plays ? styles.plays : "playing"}`}>
      <Link href={`/video/${id}`}>
        <ReactPlayer
          width={"100%"}
          height={"720px"}
          url={url}
          playing={plays}
          loop={true} //зацикливает видео
          onProgress={handleProgress}
          onReady={() => setReady(true)}
        />
      </Link>
      <div className={styles.startStopVideo} onClick={() => setPlays(!plays)}>
        {/* написать пнормальную функцию для setPlays*/}
        {plays ? (
          <Image
            src="/video/play.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />
        ) : (
          <Image
            src="/video/stop.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />
        )}
        {!ready && (
          <Image
            src="/video/search.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />
        )}
      </div>

      <div className={styles.progress}>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Video;
