import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPost } from "../../../actions/post.action";

import { Link, Navigate } from "react-router-dom";
import friendAvatar10 from "../../../assets/resources/friend-avatar10.jpg";

const MyPosts = () => {
  /* Creating a function that will dispatch an action to the store. */
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getMyPost());
    }
  }, [isAuthenticated]);
  const { isLoading, posts } = useSelector((state) => {
    return state.postReducers;
  });
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="loadMore">
      {posts.map((post) => (
        <div key={post._id} className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure>
                <img src={friendAvatar10} alt="" />
              </figure>
              <div className="friend-name">
                <Link to="time-line.html">
                  <span>
                    {" "}
                    {post.author?.firstName} {post.author?.lastName}
                  </span>
                </Link>

                <span>last Update {post.updatedAt} </span>
                <span> {post.createdAt} </span>
              </div>
              <div className="description">{post.content}</div>
              <div className="post-meta">
                <img src={post.image} alt="" />
                <div className="we-video-info">
                  <ul>
                    <li>
                      <span
                        className="views"
                        data-toggle="tooltip"
                        title="views"
                      >
                        <i className="fa fa-eye"></i>
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
                        <i className="fa fa-comments-o"></i>
                        <ins>52</ins>
                      </span>
                    </li>
                    <li>
                      <span className="like" data-toggle="tooltip" title="like">
                        <i className="ti-heart"></i>
                        <ins>2.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
                        <i className="ti-heart-broken"></i>
                        <ins>200</ins>
                      </span>
                    </li>
                    <li className="social-media">
                      <div className="menu">
                        <div className="btn trigger">
                          <i className="fa fa-share-alt"></i>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-html5"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-css3"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-dribbble"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <Link to="#" title="">
                              <i className="fa fa-pinterest"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ----------------------- */}
    </div>
  );
};

export default MyPosts;
