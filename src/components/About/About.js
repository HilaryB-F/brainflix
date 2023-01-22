import "./About.scss";
import LikeIcon from "../../assets/images/icons/Icons/likes.svg";
import ViewIcon from "../../assets/images/icons/Icons/views.svg";

export default function About({currentVid}) {
  return (
    <div>
      <h1 className="about__title">{currentVid.title}</h1>
      <div className="about__container">
        <div className="about__info">
          <p className="about__info-title">By {currentVid.channel}</p>
          <p className="about__info-timestamp">
            {new Date(currentVid.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="about__icons">
          <div className="about__icons--icon">
            <img
              className="about__icons--icon--img"
              src={ViewIcon}
              alt="Eye to represent it has been seen"
            ></img>
            <p>{currentVid.views}</p>
          </div>
          <div className="about__icons--icon about__icon--icon-like">
            <img
              className="about__icons--icon--img"
              src={LikeIcon}
              alt="Heart"
            ></img>
            <p>{currentVid.likes}</p>
          </div>
        </div>
      </div>
      <p className="about__info-description">{currentVid.description}</p>
    </div>
  );
}
