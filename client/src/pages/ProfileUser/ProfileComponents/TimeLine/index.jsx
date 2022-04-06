import React from "react";
import { Link, Navigate } from "react-router-dom";
import friendAvatar10 from "../../../../assets/resources/friend-avatar10.jpg";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
const TimeLine = () => {
  const { antherUser } = useSelector((state) => {
    return state.relationshipsReducers;
  });
  const { posts } = useSelector((state) => {
    return state.postReducers;
  });
  return (
    <section>
      <div className="gap gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="page-contents">
                <div className="col-lg-3">
                  <aside className="sidebar static">
                    <div className="widget">
                      <h4 className="widget-title">Socials</h4>
                      <ul className="socials">
                        <li className="facebook">
                          <a title="" href="#">
                            <i className="fa fa-facebook"></i>{" "}
                            <span>facebook</span> <ins>45 likes</ins>
                          </a>
                        </li>
                        <li className="twitter">
                          <a title="" href="#">
                            <i className="fa fa-twitter"></i>{" "}
                            <span>twitter</span>
                            <ins>25 likes</ins>
                          </a>
                        </li>
                        <li className="google">
                          <a title="" href="#">
                            <i className="fa fa-google"></i> <span>google</span>
                            <ins>35 likes</ins>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Shortcuts</h4>
                      <ul className="naves">
                        <li>
                          <i className="ti-clipboard"></i>
                          <a href="newsfeed.html" title="">
                            News feed
                          </a>
                        </li>
                        <li>
                          <i className="ti-mouse-alt"></i>
                          <a href="inbox.html" title="">
                            Inbox
                          </a>
                        </li>
                        <li>
                          <i className="ti-files"></i>
                          <a href="fav-page.html" title="">
                            My pages
                          </a>
                        </li>
                        <li>
                          <i className="ti-user"></i>
                          <a href="timeline-friends.html" title="">
                            friends
                          </a>
                        </li>
                        <li>
                          <i className="ti-image"></i>
                          <a href="timeline-photos.html" title="">
                            images
                          </a>
                        </li>
                        <li>
                          <i className="ti-video-camera"></i>
                          <a href="timeline-videos.html" title="">
                            videos
                          </a>
                        </li>
                        <li>
                          <i className="ti-comments-smiley"></i>
                          <a href="messages.html" title="">
                            Messages
                          </a>
                        </li>
                        <li>
                          <i className="ti-bell"></i>
                          <a href="notifications.html" title="">
                            Notifications
                          </a>
                        </li>
                        <li>
                          <i className="ti-share"></i>
                          <a href="people-nearby.html" title="">
                            People Nearby
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-bar-chart-o"></i>
                          <a href="insights.html" title="">
                            insights
                          </a>
                        </li>
                        <li>
                          <i className="ti-power-off"></i>
                          <a href="landing.html" title="">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/*<!-- centerl meta --> */}
                <div className="col-lg-6">
                  {/* ---------post------------- */}
                  <div className="loadMore">
                    {posts.map((post) => {
                      return post.author?._id === antherUser?._id ? (
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
                                    {post.author?.firstName}{" "}
                                    {post.author?.lastName}
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
                                      <span
                                        className="like"
                                        data-toggle="tooltip"
                                        title="like"
                                      >
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
                      ) : (
                        <div></div>
                      );
                    })}

                    {/* ----------------------- */}
                  </div>
                  {/* ---------------------- */}
                </div>
              </div>
              {/*<!-- centerl meta --> */}
              <div className="col-lg-3">
                <aside className="sidebar static">
                  <div className="widget">
                    <div className="banner medium-opacity bluesh">
                      <div className="baner-top">
                        <span>
                          <img src="images/book-icon.png" alt="" />
                        </span>
                        <i className="fa fa-ellipsis-h"></i>
                      </div>
                      <div className="banermeta">
                        <p>create your own favourit page.</p>
                        <span>like them all</span>
                        <a href="#" title="" data-ripple="">
                          start now!
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="widget friend-list stick-widget">
                    <div className="chat-box">
                      <div className="chat-head">
                        <span className="status f-online"></span>
                        <h6>Bucky Barnes</h6>
                        <div className="more">
                          <span>
                            <i className="ti-more-alt"></i>
                          </span>
                          <span className="close-mesage">
                            <i className="ti-close"></i>
                          </span>
                        </div>
                      </div>
                      <div className="chat-list">
                        <ul>
                          <li className="me">
                            <div className="chat-thumb">
                              <img
                                src="images/resources/chatlist1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="notification-event">
                              <span className="chat-message-item">
                                Hi James! Please remember to buy the food for
                                tomorrow! I’m gonna be handling the gifts and
                                Jake’s gonna get the drinks
                              </span>
                              <span className="notification-date">
                                <time
                                  dateTime="2004-07-24T18:18"
                                  className="entry-date updated"
                                >
                                  Yesterday at 8:10pm
                                </time>
                              </span>
                            </div>
                          </li>
                          <li className="you">
                            <div className="chat-thumb">
                              <img
                                src="images/resources/chatlist2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="notification-event">
                              <span className="chat-message-item">
                                Hi James! Please remember to buy the food for
                                tomorrow! I’m gonna be handling the gifts and
                                Jake’s gonna get the drinks
                              </span>
                              <span className="notification-date">
                                <time
                                  dateTime="2004-07-24T18:18"
                                  className="entry-date updated"
                                >
                                  Yesterday at 8:10pm
                                </time>
                              </span>
                            </div>
                          </li>
                          <li className="me">
                            <div className="chat-thumb">
                              <img
                                src="images/resources/chatlist1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="notification-event">
                              <span className="chat-message-item">
                                Hi James! Please remember to buy the food for
                                tomorrow! I’m gonna be handling the gifts and
                                Jake’s gonna get the drinks
                              </span>
                              <span className="notification-date">
                                <time
                                  dateTime="2004-07-24T18:18"
                                  className="entry-date updated"
                                >
                                  Yesterday at 8:10pm
                                </time>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <form className="text-box">
                          <textarea placeholder="Post enter to post..."></textarea>
                          <div className="add-smiles">
                            <span
                              title="add icon"
                              className="em em-expressionless"
                            ></span>
                          </div>
                          <div className="smiles-bunch">
                            <i className="em em---1"></i>
                            <i className="em em-smiley"></i>
                            <i className="em em-anguished"></i>
                            <i className="em em-laughing"></i>
                            <i className="em em-angry"></i>
                            <i className="em em-astonished"></i>
                            <i className="em em-blush"></i>
                            <i className="em em-disappointed"></i>
                            <i className="em em-worried"></i>
                            <i className="em em-kissing_heart"></i>
                            <i className="em em-rage"></i>
                            <i className="em em-stuck_out_tongue"></i>
                          </div>
                          <button type="submit"></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
