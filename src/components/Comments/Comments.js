import "./Comments.scss";
import Icon from "../../assets/images/Mohan-muruge.jpg";
import Comment from "../Comment/Comment";

export default function Comments({currentVid}) {
  return (
    <>
      <form className="comments__container">
        <h3 className="comments__total">{currentVid.comments.length} Comments</h3>
        <h3 className="comments__title">JOIN THE CONVERSATION</h3>
        <section className="comments__form">
          <img className="profile__icon" src={Icon} alt="Profile Icon"></img>
          <section className="comments__form-input">
            <textarea
              className="comments__form-input-comment"
              name="comment"
              cols="20"
              rows="10"
              placeholder="Add a new comment"
            ></textarea>
            <button className="comments__form-button">COMMENT</button>
          </section>
        </section>
      </form>
      <div>
        <Comment currentVid={currentVid} />
      </div>
    </>
  );
}
