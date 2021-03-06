import React, { useState } from "react";
import { useDispatch } from "react-redux";
import admin2 from "../../assets/resources/admin2.jpg";
import { createPost } from "../../actions/post.action";
const CreatePost = () => {
  /* Creating a function that will dispatch an action to the store. */
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    const post = new FormData();
    post.append("content", text);
    post.append("image", file);

    dispatch(createPost(post));

    // setForm({
    //   ...Form,
    //   content: "",
    // });
    setUrl("");
    setFile(null);
    setText("");
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
                onChange={(e) => setText(e.target.value)}
                //value={text.content}
                rows="2"
                name="content"
                placeholder="write something"
              />
              <div className="attachments">
                <ul>
                  <li>
                    <i className="fa fa-image"></i>
                    <label className="fileContainer">
                      <input
                        type="file"
                        FileName="image"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          setUrl(URL.createObjectURL(e.target.files[0]));
                        }}
                      />

                      <img className="imgPosty" src={url} />
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
