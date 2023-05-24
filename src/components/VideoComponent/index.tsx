import React, {FC, useRef, useState} from 'react';
import './style.css';
import PlayButton from "../Utils/PlayButton";
import vid from "../../assets/video/earth-video.mp4";
import {useFetch} from "../../hooks/useFetch";
import Loader from "../Utils/Loader";

const VideoComponent: FC = () => {

  const  { data, error, loading } = useFetch('http://176.99.11.170:4011/video');

  const [videoState, setVideoState] = useState(false);
  const vidRef = useRef(null);

  {/*----------Play button functionality on click event----------*/}

  const handlePlayVideo: () => void = () => {

    const video = vidRef.current;

    if (!videoState) {
      setVideoState(true);
      video.play();
    }

    if (videoState) {
      setVideoState(false);
      video.pause();
    }
  }

  if(error){
    console.log(error)
  }

  return (
      <section className="video">

        <PlayButton props={{videoState, setVideoState, handlePlayVideo}}/>

        {/*----------A cover plug for the video (can be replaced or totally removed)----------*/}

        <div className={videoState ? "video__cover inactive" : "video__cover"}>
          <h3 className="video__cover-title">Посмотрите видеоролик о нашем производстве</h3>
          {data && <img className="video__cover-img" src={data[0].cover} alt="production video cover"/>}

        </div>

        {/*----------The Video----------*/}

        <video ref={vidRef} loop>
          {loading && <Loader />}
          {data &&
          <>
            <source src={data[0].url} type="video/mp4" />
            <source src="https://res.cloudinary.com/dd9fiko9z/video/upload/v1680248650/uploads/MusicBand_PlayerTracks/nzkt/video/earth-video_uulvnf.mp4" type="video/mp4" />
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </>
          }
        </video>

      </section>
  )
};

export default VideoComponent;