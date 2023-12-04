import { FC } from "react";

import style from "./VideoPlayButton.module.scss";

const VideoPlayButton: FC<{ play: boolean }> = ({ play }) => {
  return <div className={`${play ? style.play : style.pause}`} />;
};

export default VideoPlayButton;
