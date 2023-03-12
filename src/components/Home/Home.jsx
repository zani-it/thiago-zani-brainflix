//import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import videos from "../../data/video-details.json";
import VideoComments from "../VideoComments/VideoComments";
import VideoDetails from "../VideoDetails/VideoDetails";


function Home() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [videoList, setVideoList] = useState();

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setVideoList(videoList.filter((allVideos) => allVideos.id !== video.id));
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
            videos={videos}
            selectedVideo={selectedVideo}
            onSelectVideo={handleVideoSelect}
          />
        </div>
      </div>
    </section>
  </div>
  )

}

export default Home;
