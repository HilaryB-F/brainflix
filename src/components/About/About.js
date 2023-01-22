import "./About.scss";
import LikeIcon from "../../assets/images/icons/Icons/likes.svg";
import ViewIcon from "../../assets/images/icons/Icons/views.svg";

export default function About({currentVid}) {
  return (
    <>
      <h1 className="about__title">{currentVid.title}</h1>
      <main className="about__container">
        <section className="about__info">
          <p className="about__info-title">By {currentVid.channel}</p>
          <p className="about__info-timestamp">
            {new Date(currentVid.timestamp).toLocaleDateString()}
          </p>
        </section>
        <section className="about__icons">
          <div className="about__icons-icon">
            <img
              className="about__icons-icon-img"
              src={ViewIcon}
              alt="Eye to represent it has been seen"
            ></img>
            <p>{currentVid.views}</p>
          </div>
          <section className="about__icons-icon about__icon-icon-like">
            <img
              className="about__icons-icon-img"
              src={LikeIcon}
              alt="Heart"
            ></img>
            <p>{currentVid.likes}</p>
          </section>
        </section>
      </main>
      <p className="about__info-description">{currentVid.description}</p>
    </>
  );
}
