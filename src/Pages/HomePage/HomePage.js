import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

document.title = "Home"

export default function HomePage() {
  const [currentVid, setCurrentVid] = useState(null);
  const [nextVideo, setNextVideo] = useState([]);

  const { videoId } = useParams();
  let id = videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";

  useEffect(() => {
    async function getVideos() {
      try {
        const { data } = await axios.get(
          ` https://project-2-api.herokuapp.com/videos/${id}?api_key=da4c65a4-16d5-49fa-b670-f34461b66cfd`
        );
        setCurrentVid(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getVideos();
  }, [id]);

  useEffect(() => {
    async function getNextVideos() {
      try {
        const { data } = await axios.get(
          ` https://project-2-api.herokuapp.com/videos?api_key=da4c65a4-16d5-49fa-b670-f34461b66cfd`
        );
        setNextVideo(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getNextVideos();
  }, []);

  if (!currentVid) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main">
      <Header />
      {currentVid && <Hero currentVid={currentVid} />}
      <div className="main__container">
        <div className="main__section">
          {currentVid && (
            <About className="main__about--section" currentVid={currentVid} />
          )}
          {currentVid && (
            <Comments
              className="main__comment--section"
              currentVid={currentVid}
            />
          )}
        </div>
        <div className="main__next-video--section">
          <h2 className="next-video__header">Next Videos</h2>
          {currentVid && <NextVideos nextVideo={nextVideo} videoId={videoId} />}
        </div>
      </div>
    </div>
  );
}
