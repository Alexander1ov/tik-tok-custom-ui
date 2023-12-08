import { FC } from "react";

import style from "./VideoPlayButton.module.scss";

const VideoPlayButton: FC<{ play: boolean; clN: string }> = ({ play, clN }) => {
  return <div className={`${clN} ${play ? style.play : style.pause} `} />;
};

export default VideoPlayButton;
