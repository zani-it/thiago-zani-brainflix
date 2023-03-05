import React from "react";
import avatarImage from "..//assets/images/Mohan-muruge.jpg";

export default function VideoComments({ comments }) {
  return (
    <div className="video__comments">
      <article>input area</article>
      <h3>3 Comments</h3>
      <div>
        <img className="nav__avatar" src={avatarImage} alt="Avatar"/>
      </div>
      <div>
        <label for="comment-input" class="comment__label">
          JOIN THE CONVERSATION
        </label>
        <textarea
          class="comment__text-area"
          type="text"
          id="comment-input"
          name="comment box"
          placeholder="Add a new comment">
        </textarea>
        <span id="form-error"></span>
        <button className="comment__button"> COMMENT</button>
      </div>
      {comments.map((comments) => (
        <div key={comments.id} className="comment">
          <div>
            <h3>{comments.name}</h3>
            <h3>
              {new Date(comments.timestamp).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </h3>
          </div>
          <div>
            <p>{comments.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
