import React from "react";
import "./Comment.scss";

export default function Comment({currentVid}) {
  return (
    <>
      {currentVid.comments &&
        currentVid.comments.map((currentVideo) => {
          return (
            <div className="comment__container" key={currentVideo.id}>
              <span className="comment__avatar-placeholder"></span>
              <p className="comment__name">{currentVideo.name}</p>
              <p className="comment__timestamp">
                {new Date(currentVideo.timestamp).toLocaleDateString()}
              </p>
              <p className="comment__comment">{currentVideo.comment}</p>
            </div>
          );
        })}
    </>
  );
}
