import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import videos from "../../data/video-details.json";
import VideoComments from "../VideoComments/VideoComments";
import VideoDetails from "../VideoDetails/VideoDetails";

function Home() {
  const { videoId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const newSelectedVideo = videos.find((video) => video.id === videoId);
    if (newSelectedVideo) {
      setSelectedVideo(newSelectedVideo);
    }
  }, [videoId]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    navigate(`/videos/${video.id}`);
  };

  return (
    <div>
      <VideoPlayer video={selectedVideo} />
      <section className="page__desktop-layout">
        <div className="page__container">
          <div>
            <VideoDetails video={selectedVideo} />
            <VideoComments
              comments={selectedVideo.comments}
              video={selectedVideo}
            />
          </div>
          <div>
            <VideoList
              videos={videos.filter((video) => video.id !== selectedVideo.id)}
              selectedVideo={selectedVideo}
              onSelectVideo={handleVideoSelect}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
