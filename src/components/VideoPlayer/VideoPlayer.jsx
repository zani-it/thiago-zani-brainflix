import React from "react";

export default function VideoPlayer({ video }) {
  if (!video) {
    return null;
  }
  return (
    <main className="video__section">
      <div className="video__container">
        <video
          className="video__player"
          poster={video.image}
          alt={video.name}
          controls
        ></video>
      </div>
    </main>
  );
}
