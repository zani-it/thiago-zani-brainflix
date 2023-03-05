import React from "react";
import VideoComments from "./VideoComments";

export default function VideoPlayer(props) {
  if (!props.video) {
    return null;
  }

  return (
    <main className="video__section">  
      <video className="video__player" poster={props.video.image} alt={props.video.name}>
      </video>
      <h2>{props.video.title}</h2>
      <article className="video__card">

        <div>
          <div>
            {props.video.channel}
          </div>
          <div>
            {new Date(props.video.timestamp).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
        </div>

        <div>
          <div>{props.video.views}</div>
          <div>{props.video.likes}</div>
        </div>

        <p className="video__description">{props.video.description}</p>
      </article>
    </main>
  );
}
