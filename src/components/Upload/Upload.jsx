import uploadThumb from "../../assets/images/Upload-video-preview.jpg";

function Upload() {
  return (
    <div>
      <div className="upload__container">
        <div className="upload__title-box">
          <h1 className="upload__title">Upload Video</h1>
        </div>

        <form className="upload__input">
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
                  <label className="upload__label" for="upload__input">
                    TITLE YOUR VIDEO
                  </label>
                  <textarea
                    className="upload__input-el"
                    type="text"
                    id="name-input"
                    name="video title box"
                    placeholder="Add a title to your video"
                  ></textarea>
                </div>
                <div>
                  <label className="upload__label" for="upload__input">
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <textarea
                    className="upload__input-el-description"
                    type="text"
                    id="name-input"
                    name="video title box"
                    placeholder="Add a video descprition to your video"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="upload__button-container">
            <button className="upload__button-cancel"> CANCEL</button>
            <button className="upload__button-publish"> PUBLISH</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Upload;
