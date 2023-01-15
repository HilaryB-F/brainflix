import "./Hero.scss";

export default function Hero(props) {
  let image = props.currentVid.image;
  return (
    <div className="hero__container">
      <video className="hero__video" poster={image} controls />
    </div>
  );
}
