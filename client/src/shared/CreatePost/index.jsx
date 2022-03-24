import React, { useState } from "react";
import { useDispatch } from "react-redux";
import admin2 from "../../assets/resources/admin2.jpg";
import { createPost } from "../../actions/post.action";
const CreatePost = () => {
  /* Creating a function that will dispatch an action to the store. */
  const dispatch = useDispatch();

  const [Form, setForm] = useState({
    content: "",
  });
  const onInputChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(createPost(Form));

    //ba3ed maykamel yraja formul fer8a
    setForm({
      ...Form,
      content: "",
    });
  };

  return (
    <div>
      <div className="central-meta">
        {/*  create new post */}
        <div className="new-postbox">
          <figure>
            <img src={admin2} alt="" />
          </figure>
          <div className="newpst-input">
            <form onSubmit={(e) => onSubmitForm(e)}>
              <textarea
                onChange={(e) => onInputChange(e)}
                value={Form.content}
                rows="2"
                name="content"
                placeholder="write something"
              />
              <div className="attachments">
                <ul>
                  <li>
                    <i className="fa fa-music"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-image"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-video-camera"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-camera"></i>
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <button
                      className="border focus:border-black focus:text-black "
                      type="submit"
                    >
                      Post
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
