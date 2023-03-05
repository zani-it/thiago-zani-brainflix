import React from "react";
import VideoComments from "./VideoComments";
import viewsIcon from "../assets/images/Icons/views.svg";
import likesIcon from "../assets/images/Icons/likes.svg";

export default function VideoPlayer(props) {
  if (!props.video) {
    return null;
  }

  return (
    <main className="video__section">
      <div className="video__container">
      <video
        className="video__player"
        poster={props.video.image}
        alt={props.video.name}
        controls
      ></video>
      </div>
    </main>
  );
}
