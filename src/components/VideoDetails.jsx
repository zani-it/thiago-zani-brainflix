import React from "react";
import viewsIcon from "../assets/images/Icons/views.svg";
import likesIcon from "../assets/images/Icons/likes.svg";

export default function VideoDetails({ video }) {
  return (
    <div className="video-details">
        <div className="video-details__container">
      <h2 className="video__title">{video.title}</h2>
      <div className="video__card">
        <div className="video__details-left">
          <div className="video__channel">By {video.channel}</div>
          <div className="video__date">
            {new Date(video.timestamp).toLocaleDateString("en-US", {
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
            {video.views}
          </div>
          <div className="video__likes">
            <img
              alt="likes icon"
              className="video__details--icon"
              src={likesIcon}
            ></img>
            {video.likes}
          </div>
        </div>
      </div>
      <p className="video__description">{video.description}</p>
      </div>
    </div>
  );
}
