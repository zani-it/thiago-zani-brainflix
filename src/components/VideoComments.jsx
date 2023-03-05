import React from "react";
import avatarImage from "..//assets/images/Mohan-muruge.jpg";

export default function VideoComments({ comments }) {
  return (
    <div className="comments">
      <article className="comments__section">
        <div className="comments__input">
          <h4>3 Comments</h4>
          <div className="comments__input--box">
            <div>
              <img
                className="comments__avatar"
                src={avatarImage}
                alt="Avatar"
              />
            </div>
            <div>
              <label for="comment-input" class="comments__label">
                JOIN THE CONVERSATION
              </label>
              <textarea
                class="comments__input-el"
                type="text"
                id="comment-input"
                name="comment box"
                placeholder="Add a new comment"
              ></textarea>
              <span id="form-error"></span>
              <button className="comments__button"> COMMENT</button>
            </div>
          </div>
        </div>

        {comments.map((comments) => (
          <div key={comments.id} className="comment">
            <div className="comments__item">
              <img
                className="comments__avatar"
                src={avatarImage}
                alt="Avatar"
              />
              <div>
                <div className="comments__header">
                  <h4>{comments.name}</h4>
                  <div className="comments__date">
                    {new Date(comments.timestamp).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </div>
                </div>

                <div>
                  <p>{comments.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}
