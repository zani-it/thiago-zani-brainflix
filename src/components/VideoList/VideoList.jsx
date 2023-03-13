export default function VideoList({ videos, selectedVideo, onSelectVideo }) {
  const filteredVideos = selectedVideo
    ? videos.filter((video) => video.id !== selectedVideo.id)
    : videos;

  return (
    <nav className="list">
      <div className="list__container">
        <div>
          <h2 className="list__title">NEXT VIDEOS</h2>
        </div>
        <div>
          {filteredVideos.map((video) => (
            <div
              onClick={() => onSelectVideo(video.id, true)}
              className="video__thumb--container"
              key={video.id}>
              <div className="list__item">
                <img
                  className="video__thumb"
                  src={video.image}
                  alt={video.title}
                />
              </div>
              <div className="video__thumb--details">
                <div className="video__thumb--title">{video.title}</div>
                <div className="video__thumb--channel">{video.channel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
