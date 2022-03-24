import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPost } from "../../../actions/post.action";
import { createComment } from "../../../actions/comment.action";
import { Link } from "react-router-dom";
import friendAvatar10 from "../../../assets/resources/friend-avatar10.jpg";

import comet1 from "../../../assets/resources/comet-1.jpg";
import comet2 from "../../../assets/resources/comet-2.jpg";
const MyPosts = () => {
  /* Creating a function that will dispatch an action to the store. */
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMyPost());
  }, []);
  const { isLoading, posts } = useSelector((state) => {
    return state.postReducers;
  });

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

            <div className="coment-area">
              <ul className="we-comet">
                {post.PostsComments.length > 0 &&
                  post.PostsComments.map((comment) => {
                    return (
                      <li>
                        {/* comment */}

                        <div className="comet-avatar">
                          <img src={comet1} alt="" />
                        </div>

                        <div className="we-comment">
                          <div className="coment-head">
                            <h5>
                              <Link to="time-line.html" title=""></Link>
                            </h5>
                            <span>1 year ago</span>
                            <Link className="we-reply" to="#" title="Reply">
                              <i className="fa fa-reply"></i>
                            </Link>
                          </div>
                          <p>{comment.content}</p>
                        </div>
                        {/* replay comment */}
                        <ul>
                          {post.PostsComments.comment !== null &&
                            post.PostsComments.map((comments) => {
                              return (
                                <li>
                                  <div className="comet-avatar">
                                    <img src={comet2} alt="" />
                                  </div>
                                  <div className="we-comment">
                                    <div className="coment-head">
                                      <h5>
                                        <Link to="time-line.html" title="">
                                          alexendra dadrio
                                        </Link>
                                      </h5>
                                      <span>1 month ago</span>
                                      <Link
                                        className="we-reply"
                                        to="#"
                                        title="Reply"
                                      >
                                        <i className="fa fa-reply"></i>
                                      </Link>
                                    </div>
                                    <p>{comments.content}</p>
                                  </div>
                                </li>
                              );
                            })}
                          {/* create replay comment */}
                          <li className="post-comment">
                            <div className="comet-avatar">
                              <img src={comet1} alt="" />
                            </div>
                            <div className="post-comt-box">
                              <form method="post">
                                <textarea placeholder="Post your comment"></textarea>

                                <button className="text-cyan-500	 z-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                  comment
                                </button>
                              </form>
                            </div>
                          </li>
                        </ul>
                      </li>
                    );
                  })}

                <li>
                  <Link to="#" title="" className="showmore underline">
                    more comments
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* ----------------------- */}
    </div>


  );
};

export default MyPosts;
