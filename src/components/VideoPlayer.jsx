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
      <video
        className="video__player"
        poster={props.video.image}
        alt={props.video.name}
        controls
      ></video>
      <h2 className="video__title">{props.video.title}</h2>
      <div className="video__card">
        <div className="video__details-left">
          <div className="video__channel">By {props.video.channel}</div>
          <div className="video__date">
            {new Date(props.video.timestamp).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
        </div>

        <div className="video__details-right">
          <div>
            <img
              alt="views icon"
              className="video__details--icon"
              src={viewsIcon}
            ></img>
            {props.video.views}
          </div>
          <div className="video__likes">
            <img
              alt="likes icon"
              className="video__details--icon"
              src={likesIcon}
            ></img>
            {props.video.likes}
          </div>
        </div>
      </div>
      <p className="video__description">{props.video.description}</p>
    </main>
  );
}
