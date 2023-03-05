import React from "react";

export default function VideoList(props) {
  const { videos, selectedVideo, onSelectVideo, video } = props;

  const filteredVideos = selectedVideo
    ? videos.filter((video) => video.id !== selectedVideo.id)
    : videos;

  return (
    <nav>
      <div>
        <h2>NEXT VIDEOS</h2>
      </div>
      <ul>
        {filteredVideos.map((video) => (
          <div key={video.id}>
            <img
              className="video__thumb"
              src={video.image}
              alt={video.title}
              onClick={() => onSelectVideo(video)}
            />
            <div>
              <div>{video.title}</div>
              <div>{video.channel}</div>
            </div>
          </div>
        ))}
      </ul>
    </nav>
  );
}
