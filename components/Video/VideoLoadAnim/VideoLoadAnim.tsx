import { FC } from "react";
import style from "./VideoLoadAnim.module.scss";

const VideoLoadAnim: FC = () => {
  return (
    <div className={style.loader}>
      <div className={style.one}></div>
      <div className={style.two}></div>
      <div className={style.three}></div>
    </div>
  );
};

export default VideoLoadAnim;
