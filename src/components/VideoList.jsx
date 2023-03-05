import React from "react";

export default function VideoList(props) {
  const { videos, selectedVideo, onSelectVideo, video } = props;

  const filteredVideos = selectedVideo
    ? videos.filter((video) => video.id !== selectedVideo.id)
    : videos;

  return (
    <nav className="list">
      <div className="list__container">
      <div >
        <h2 className="list__title">NEXT VIDEOS</h2>
      </div>
      <div>
          
            {filteredVideos.map((video) => (
              <div className="video__thumb--container">
              <div className="list__item" key={video.id}>
                <img
                  className="video__thumb"
                  src={video.image}
                  alt={video.title}
                  onClick={() => onSelectVideo(video)}
                />
            </div>
            <div className="video__thumb--details">
              <div className="video__thumb--title" >{video.title}</div>
              <div className="video__thumb--channel">{video.channel}</div>
            </div>
          </div>
        ))}
      
      </div>
      </div>
    </nav>
  );
}
