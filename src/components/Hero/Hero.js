import "./Hero.scss";

export default function Hero({ currentVid }) {
  let image = currentVid.image;
  return (
    <main className="hero__container">
      <video className="hero__video" poster={image} controls />
    </main>
  );
}
