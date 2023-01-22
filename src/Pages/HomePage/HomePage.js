import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

export default function HomePage() {
  const [currentVid, setCurrentVid] = useState(null);
  const [nextVideo, setNextVideo] = useState([]);

  const { videoId } = useParams();
  let id = videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";

  // "84e96018-4022-434e-80bf-000ce4cd12b8"

  useEffect(() => {
    async function getVideos() {
      try {
        const { data } = await axios.get(
          ` http://localhost:8080/videoplayer/${id}`
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
        const { data } = await axios.get(` http://localhost:8080/videoplayer`);
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
      <Hero currentVid={currentVid} />
      <main className="main__container">
        <section className="main__section">
          <About className="main__about--section" currentVid={currentVid} />
          <Comments
            className="main__comment--section"
            currentVid={currentVid}
          />
        </section>
        <section className="main__next-video--section">
          <h2 className="next-video__header">Next Videos</h2>
          <NextVideos nextVideo={nextVideo} videoId={id} />
        </section>
      </main>
    </div>
  );
}
