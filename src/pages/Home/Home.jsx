import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import VideoList from "../../components/VideoList/VideoList";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoComments from "../../components/VideoComments/VideoComments";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import { API_KEY } from '../../env';

function Home() {
  const [selectedVideo, setSelectedVideo] = useState();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const {search} = useLocation();

  const handleVideoSelect = useCallback(async (videoId, shouldNavigate = false) => {
    const video = videos.find(video => video.id === videoId) ?? videos.at(0);

    if (video) {
      shouldNavigate && navigate(`/?videoId=${video.id}`);
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${video.id}?api_key=6bcd4830-262f-4d29-b9f7-13361fa690f6`
        )
        setSelectedVideo(response.data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error(error);
      }
    }
  }, [navigate, videos]);

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`
        );
        setVideos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllVideos();
  }, []);

  useEffect(() => {    
    const urlParams = new URLSearchParams(search);
    const videoId = urlParams.get("videoId");

    handleVideoSelect(videoId);
  }, [search, handleVideoSelect]);

  if (!selectedVideo) return null;

  return (
    <>
      <VideoPlayer video={selectedVideo} />
      <section className="page__desktop-layout">
        <div className="page__container">
          <VideoDetails video={selectedVideo} />
          <VideoComments
            video={selectedVideo}
            comments={selectedVideo.comments}
          />
          <VideoList
            videos={videos}
            selectedVideo={selectedVideo}
            onSelectVideo={handleVideoSelect}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
