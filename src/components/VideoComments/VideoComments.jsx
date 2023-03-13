import React, { useState, useEffect } from "react";
import axios from "axios";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import avatarPlaceHolder from "../../assets/images/placeholder.png";
import { API_KEY } from '../../env';

export default function VideoComments({ comments, video }) {
  const [commentList, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const numComments = comments?.length ?? 0;

  useEffect(() => {
    setComments(comments);
  }, [comments]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    const comment = {
      name: "Guest",
      comment: commentText.trim(),
    };
    try {
      await axios.post(
        `https://project-2-api.herokuapp.com/videos/${video?.id}/comments?api_key=${API_KEY}`,
        comment
      );
      setComments(prev => [...prev, { ...comment, timestamp: Date.now() }]);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comments">
      <article className="comments__section">
        <form className="comments__input" onSubmit={handleSubmit}>
          <h4>{numComments} Comments</h4>
          <div className="comments__input--box">
            <div>
              <img
                className="comments__avatar"
                src={avatarImage}
                alt="Avatar"
              />
            </div>
            <div className="comments__input--horizontal">
              <div className="comments__input-streecher">
                <label htmlFor="comment-input" className="comments__label">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="comments__input-el"
                  type="text"
                  id="comment-input"
                  name="comment box"
                  placeholder="Add a new comment"
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                ></textarea>
              </div>
              <button className="comments__button"> COMMENT</button>
            </div>
          </div>
        </form>
        <div className="comments__scroller">
          {commentList &&
            commentList
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((comment) => (
                <div key={comment.id} className="comment strecher">
                  <div className="comments__item">
                    <img
                      className="comments__avatar"
                      src={avatarPlaceHolder}
                      alt="Avatar"
                    />
                    <div className="strecher">
                      <div className="comments__header">
                        <h4>{comment.name}</h4>
                        <div className="comments__date">
                          {new Date(comment.timestamp).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>

                      <div>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </article>
    </div>
  );
}
