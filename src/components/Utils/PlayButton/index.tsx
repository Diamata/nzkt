import React, {Dispatch, FC} from 'react';
import "./style.css";
import {FaPause, FaPlay} from "react-icons/fa";

interface PlayButtonProps {
  props: {
    videoState?: boolean;
    handlePlayVideo?: () => void;
    setVideoState?: Dispatch<React.SetStateAction<boolean>>;
  };
}

const PlayButton:FC<PlayButtonProps> = ({props: {videoState, setVideoState, handlePlayVideo}}) => {

  return (
      <div className={videoState ? "play playing" : "play"}>
        <div className={videoState ? "play__outer active-outer" : "play__outer"}>
          <div className={videoState ? "play__middle active-middle" : "play__middle"}>
            <div className="play__inner" onClick={handlePlayVideo}>
              {videoState && <FaPause className="play__pause"/>}
              {!videoState && <FaPlay className="play__triangle"/>}
            </div>
          </div>
        </div>
      </div>
  );
};

export default PlayButton;