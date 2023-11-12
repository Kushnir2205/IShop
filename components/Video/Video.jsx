import React from "react";
import s from "./Video.module.css";

const Video = () => {
  return (
    <ul className={s.videoList}>
      <li className={s.videoItem}>
        <video className={s.video} width={350} height={550} autoPlay muted loop>
          <source src="/assets/video/IMG_1556.MP4" type="video/mp4" />
        </video>
      </li>

      <li className={`${s.videoItem} ${s.videoItemTwo}`}>
        <video className={s.video} width={350} height={550} autoPlay muted loop>
          <source src="/assets/video/IMG_1556.MP4" type="video/mp4" />
        </video>
      </li>
    </ul>
  );
};

export default Video;
