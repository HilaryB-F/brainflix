import "./Upload.scss";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import VideoImg from "../../assets/images/Upload-video-preview.jpg";



export default function Upload() {
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    alert("Your video has been published");
    navigate("/");
  }

  return (
    <div>
      <Header />
      <div className="upload">
        <h1 className="upload__title"> Upload Video</h1>
        <div className="upload__desktop">
          <div className="upload__vid">
            <h2 className="upload__vid-title">VIDEO THUMBNAIL</h2>
            <img
              className="upload__vid-img"
              src={VideoImg}
              alt="Uploaded video preview"
            ></img>
          </div>
          <form className="upload__form" onSubmit={handleOnSubmit}>
            <label className="label__title">
              TITLE YOUR VIDEO
              <input
                className="upload__publish-title"
                type="text"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="label__description">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="upload__publish-description"
                placeholder="Add a description to your video"
                cols="20"
                rows="5"
              ></textarea>
            </label>
            <button type="submit" className="publish__button">
              Publish
            </button>
          </form>
        </div>
        <div className="publish">
          <Link className="upload__cancel" to="/">
            {" "}
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
