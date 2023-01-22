import "./Hero.scss";

export default function Hero(props) {
  let image = props.currentVid.image;
  return (
    <main className="hero__container">
      <video className="hero__video" poster={image} controls />
    </main>
  );
}
