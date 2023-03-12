import "./App.scss";
import React, { useState } from "react";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videos from "./data/video-details.json";
import VideoComments from "./components/VideoComments/VideoComments";
import NavBar from "./components/NavBar/NavBar";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [videoList, setVideoList] = useState();

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setVideoList(videoList.filter((allVideos) => allVideos.id !== video.id));
  };

  return (
    <div>
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <div>
        <VideoPlayer video={selectedVideo} />
      </div>
      <div className="page__desktop-layout">
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
              videos={videos}
              selectedVideo={selectedVideo}
              onSelectVideo={handleVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
