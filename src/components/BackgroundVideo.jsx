import React from 'react';

const BackgroundVideo = () => {
  return (
    <>
      <video
        className="background-video background-video--bottom background-video--desktop"
        width="100%"
        height="100%"
        loop
        muted
        autoPlay
        playsInline
      >
        <source
          src="video_bg/match-video.mov"
          type='video/mp4; codecs="hvc1"'
        />
        <source src="video_bg/match-video.webm" type="video/webm" />
      </video>
      <video
        className="background-video background-video--bottom background-video--mobile"
        width="100%"
        height="100%"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="video_bg/match-video-mobile.webm" type="video/webm" />
      </video>
    </>
  );
};

export default BackgroundVideo;
