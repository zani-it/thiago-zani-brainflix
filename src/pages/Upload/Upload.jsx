import React, { useState } from "react";
import uploadThumb from "../../assets/images/Upload-video-preview.jpg";
import { NavLink, useNavigate } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && description) {
      setShowSuccessModal(true);
      setShowError(false);
      setTitle("");
      setDescription("");
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 5000);
    } else {
      setShowSuccessModal(false);
      setShowError(true);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setShowError(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setShowError(false);
  };

  return (
    <div>
      <div className="upload__container">
        <div className="upload__title-box">
          <h1 className="upload__title">Upload Video</h1>
        </div>

        <form className="upload__input" onSubmit={handleSubmit}>
          <div className="upload__input-box">
            <div>
              <div className="upload__label">VIDEO THUMBNAIL</div>
              <img
                className="upload__thumbnail"
                src={uploadThumb}
                alt="Uploaded Video Thumbnail"
              />
            </div>
            <div className="upload__video-form">
              <div className="upload__is">
                <div>
                  <label className="upload__label" htmlFor="title-input">
                    TITLE YOUR VIDEO
                  </label>
                  <textarea
                    className={`upload__input-el ${showError && !title && "upload__input-el--error"}`}
                    type="text"
                    id="title-input"
                    name="video title box"
                    placeholder={showError && !title ? "Please fill all fields" : "Add a title to your video"}
                    value={title}
                    onChange={handleTitleChange}
                  ></textarea>
                </div>
                <div>
                  <label className="upload__label" htmlFor="description-input">
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <textarea
                    className={`upload__input-el-description ${showError && !description && "upload__input-el--error"}`}
                    type="text"
                    id="description-input"
                    name="video title box"
                    placeholder={showError && !description ? "Please fill all fields" : "Add a video description to your video"}
                    value={description}
                    onChange={handleDescriptionChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="upload__button-container">
            <NavLink to="/" className="upload__button-cancel">CANCEL</NavLink>
            <button type="submit" className="upload__button-publish">PUBLISH</button>
          </div>
        </form>
      </div>

      {showSuccessModal && (
        <div className="upload__modal">
          <div className="upload__modal--content">
            <p>Thank you!</p>
            <p>You successfully published a video.</p>
            <NavLink className="upload__button-close" onClick={() => setShowSuccessModal(false)} to="/">CLOSE</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
