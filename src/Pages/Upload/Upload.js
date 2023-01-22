import "./Upload.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Header from "../../components/Header/Header";
import VideoImg from "../../assets/images/Upload-video-preview.jpg";

export default function Upload() {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/videoplayer", {
        title: formRef.current.title.value,
        description: formRef.current.description.value,
        channel: "Flynn Rider",
        image: "http://localhost:8080/upload-video-preview.jpg",
        likes: "3494721",
        views: "123423",
        timestamp: 1654761223,
        comments: [
          {
            "id": "6ff4314c-acde-4c91-a753-95cb7a366ee9",
            "name": "Rick Astley",
            "comment": "Never gonna give you up, never gonna let you down. Never gonna run around and desert you!",
            "likes": 0,
            "timestamp": 1632227521000
          },
          {
            "id": "894b2ef9-640e-4d55-95ac-c65cfc39d693",
            "name": "Aick Rstley",
            "comment": "Never gonna make you cry, never gonna say goodbye. Never gonna tell a like and hurt you!",
            "likes": 1,
            "timestamp": 1631976360000
          }
        ]
      })
      
      .catch((error) => {
        console.log(error.response.data, "Error");
      });
    alert("Your video has been published");
    navigate("/");
  };

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
              name="image"
            ></img>
          </div>
          <form
            className="upload__form"
            onSubmit={handleOnSubmit}
            ref={formRef}
          >
            <label className="label__title">
              TITLE YOUR VIDEO
              <input
                className="upload__publish-title"
                type="text"
                placeholder="Add a title to your video"
                id="title"
              />
            </label>
            <label className="label__description">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="upload__publish-description"
                placeholder="Add a description to your video"
                cols="20"
                rows="5"
                id="description"
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
