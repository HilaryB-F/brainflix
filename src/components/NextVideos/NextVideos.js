import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ nextVideo, videoId }) {
  let id = videoId;

  return (
    <>
      {nextVideo
        .filter((upcomingVideo) => {
          return upcomingVideo.id !== id;
        })

        .map((upcomingVideo) => {
          return (
            <Link
              to={`/videoplayer/${upcomingVideo.id}`}
              key={upcomingVideo.id}
              className="next-video__link"
            >
              <main className="next-video__container">
                <img
                  id={upcomingVideo.id}
                  className="next-video__thumbnail"
                  alt={upcomingVideo.title}
                  src={upcomingVideo.image}
                />
                <section className="next-video__info">
                  <p className="next-video__title">{upcomingVideo.title}</p>
                  <p className="next-video__name">{upcomingVideo.channel}</p>
                </section>
              </main>
            </Link>
          );
        })}
    </>
  );
}

export default NextVideos;
