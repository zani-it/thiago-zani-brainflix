import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoComments from "../VideoComments/VideoComments";
import VideoDetails from "../VideoDetails/VideoDetails";
import axios from "axios";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=6bcd4830-262f-4d29-b9f7-13361fa690f6"
      )
      .then((response) => {
        setVideos(response.data);

        const urlParams = new URLSearchParams(window.location.search);
        const videoId = urlParams.get("videoId");

        const newSelectedVideo = videoId
          ? response.data.find((video) => video.id === videoId)
          : response.data[0];

        setSelectedVideo(newSelectedVideo);
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${newSelectedVideo.id}?api_key=6bcd4830-262f-4d29-b9f7-13361fa690f6`
          )
          .then((response) => {
            setSelectedVideo((prev) => ({ ...prev, ...response.data }));
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    navigate(`/?videoId=${video.id}`);
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${video.id}?api_key=6bcd4830-262f-4d29-b9f7-13361fa690f6`
      )
      .then((response) => {
        setSelectedVideo((prev) => ({ ...prev, ...response.data }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {selectedVideo && <VideoPlayer video={selectedVideo} />}
      <section className="page__desktop-layout">
        <div className="page__container">
          {selectedVideo && (
            <div>
              <VideoDetails video={selectedVideo} />
              <VideoComments
                video={selectedVideo}
                comments={selectedVideo.comments}
              />
            </div>
          )}
          <div>
            <VideoList
              videos={videos}
              selectedId={selectedVideo?.id}
              onSelectVideo={handleVideoSelect}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
