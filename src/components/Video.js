import React from "react";
import VideoLooper from "react-video-looper";
import myvideo from "./video/videoplayback.mp4";

function Video() {
  return (
    <div class="video-loop">
      {" "}
      <VideoLooper source={myvideo} start={4.31} end={9.48} />     
    </div>
  );
}

export default Video;

