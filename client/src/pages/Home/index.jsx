import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import friendAvatar from "../../assets/resources/friend-avatar.jpg";
import friendAvatar3 from "../../assets/resources/friend-avatar3.jpg";
import friendAvatar5 from "../../assets/resources/friend-avatar5.jpg";

import friendAvatar9 from "../../assets/resources/friend-avatar9.jpg";
import friendAvatar10 from "../../assets/resources/friend-avatar10.jpg";

import comet1 from "../../assets/resources/comet-1.jpg";
import comet2 from "../../assets/resources/comet-2.jpg";

import userList1 from "../../assets/resources/userlist-1.jpg";
import userList2 from "../../assets/resources/userlist-2.jpg";
import bookIcon from "../../assets/resources/bloglist-2.jpg";

import chatList1 from "../../assets/resources/chatlist1.jpg";
import chatList2 from "../../assets/resources/chatlist1.jpg";
import { getPosts, getPostsWithComment } from "../../actions/post.action";

import { createComment } from "../../actions/comment.action";
import CreatePost from "../../shared/CreatePost";
import Posts from "../../shared/Posts";

const Home = () => {
  /* Creating a function that will dispatch an action to the store. */
  const dispatch = useDispatch();

  /* Creating a state variable called Form and setting it to an empty array. */
  const [Form, setForm] = useState([
    {
      content: "",
      _id: "",
    },
  ]);
  /**
   * It sets the value of the input to the value of the target.
   * @param e - The event object that contains the data of the event that triggered the function.
   * @param postId - The id of the post that the comment is being added to.
   */
  const onInputCommentChange = (e, postId) => {
    setForm({ ...Form, [e.target.name]: e.target.value, postId });
    console.log(Form);
  };
  /**
   * The function creates a comment and then clears the form
   * @param e - The event object that contains the data of the event that triggered the function.
   */
  const onSubmitFormComment = (e) => {
    e.preventDefault();
    dispatch(createComment(Form));

    //ba3ed maykamel yraja formul fer8a
    setForm({
      ...Form,
      content: "",
    });
  };

  useEffect(() => {
    dispatch(getPostsWithComment());
  }, []);
  const { isLoading, posts } = useSelector((state) => {
    return state.postReducers;
  });

  return (
    <section className="theme-layout">
      <div className="gap gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="page-contents">
                <div className="col-lg-3">
                  <aside className="sidebar static">
                    <div className="widget">
                      <h4 className="widget-title">Shortcuts</h4>
                      <ul className="naves">
                        <li>
                          <i className="ti-clipboard"></i>
                          <Link to="newsfeed.html" title="">
                            News feed
                          </Link>
                        </li>
                        <li>
                          <i className="ti-mouse-alt"></i>
                          <Link to="inbox.html" title="">
                            Inbox
                          </Link>
                        </li>
                        <li>
                          <i className="ti-files"></i>
                          <Link to="fav-page.html" title="">
                            My pages
                          </Link>
                        </li>
                        <li>
                          <i className="ti-user"></i>
                          <Link to="timeline-friends.html" title="">
                            friends
                          </Link>
                        </li>
                        <li>
                          <i className="ti-image"></i>
                          <Link to="timeline-photos.html" title="">
                            images
                          </Link>
                        </li>
                        <li>
                          <i className="ti-video-camera"></i>
                          <Link to="timeline-videos.html" title="">
                            videos
                          </Link>
                        </li>
                        <li>
                          <i className="ti-comments-smiley"></i>
                          <Link to="messages.html" title="">
                            Messages
                          </Link>
                        </li>
                        <li>
                          <i className="ti-bell"></i>
                          <Link to="notifications.html" title="">
                            Notifications
                          </Link>
                        </li>
                        <li>
                          <i className="ti-share"></i>
                          <Link to="people-nearby.html" title="">
                            People Nearby
                          </Link>
                        </li>
                        <li>
                          <i className="fa fa-bar-chart-o"></i>
                          <Link to="insights.html" title="">
                            insights
                          </Link>
                        </li>
                        <li>
                          <i className="ti-power-off"></i>
                          <Link to="landing.html" title="">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Recent Activity</h4>
                      <ul className="activitiez">
                        <li>
                          <div className="activity-meta">
                            <i>10 hours Ago</i>
                            <span>
                              <Link to="#" title="">
                                Commented on Video posted{" "}
                              </Link>
                            </span>
                            <h6>
                              by <Link to="time-line.html">black demon.</Link>
                            </h6>
                          </div>
                        </li>
                        <li>
                          <div className="activity-meta">
                            <i>30 Days Ago</i>
                            <span>
                              <Link to="#" title="">
                                Posted your status. “Hello guys, how are you?”
                              </Link>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="activity-meta">
                            <i>2 Years Ago</i>
                            <span>
                              <Link to="#" title="">
                                Share Link video on her timeline.
                              </Link>
                            </span>
                            <h6>
                              "<Link to="#">you are so funny mr.been.</Link>"
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="widget stick-widget">
                      <h4 className="widget-title">Who's follownig</h4>
                      <ul className="followers">
                        <li>
                          <figure>
                            <img src={friendAvatar3} alt="" />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <Link to="time-line.html" title="">
                                Allen
                              </Link>
                            </h4>
                            <Link to="#" title="" className="underline">
                              Add Friend
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/* ----------- */}
                <div className="col-lg-6">
                  <CreatePost />

                  {/* ------------- */}

                  <Posts />
                </div>
                <div className="col-lg-3">
                  <aside className="sidebar static">
                    <div className="widget">
                      <h4 className="widget-title">Your page</h4>
                      <div className="your-page">
                        <figure>
                          <Link to="#" title="">
                            <img src={friendAvatar9} alt="" />
                          </Link>
                        </figure>
                        <div className="page-meta">
                          <Link to="#" title="" className="underline">
                            My page
                          </Link>
                          <span>
                            <i className="ti-comment"></i>
                            <Link to="insight.html" title="">
                              Messages <em>9</em>
                            </Link>
                          </span>
                          <span>
                            <i className="ti-bell"></i>
                            <Link to="insight.html" title="">
                              Notifications <em>2</em>
                            </Link>
                          </span>
                        </div>
                        <div className="page-likes">
                          <ul className="nav nav-tabs likes-btn">
                            <li className="nav-item">
                              <Link
                                className="active"
                                to="#link1"
                                data-toggle="tab"
                              >
                                likes
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="" to="#link2" data-toggle="tab">
                                views
                              </Link>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              className="tab-pane active fade show "
                              id="link1"
                            >
                              <span>
                                <i className="ti-heart"></i>884
                              </span>
                              <Link to="#" title="weekly-likes">
                                35 new likes this week
                              </Link>
                              <div className="users-thumb-list">
                                <Link
                                  to="#"
                                  title="Anderw"
                                  data-toggle="tooltip"
                                >
                                  <img src={userList1} alt="" />
                                </Link>
                                <Link
                                  to="#"
                                  title="frank"
                                  data-toggle="tooltip"
                                >
                                  <img src={userList2} alt="" />
                                </Link>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="link2">
                              <span>
                                <i className="ti-eye"></i>440
                              </span>
                              <Link to="#" title="weekly-likes">
                                440 new views this week
                              </Link>
                              <div className="users-thumb-list">
                                <Link
                                  to="#"
                                  title="Anderw"
                                  data-toggle="tooltip"
                                >
                                  <img src={userList1} alt="" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget">
                      <div className="banner medium-opacity bluesh">
                        <div className="bg-image"></div>
                        <div className="baner-top">
                          <span>
                            <img alt="" src={bookIcon} />
                          </span>
                          <i className="fa fa-ellipsis-h"></i>
                        </div>
                        <div className="banermeta">
                          <p>create your own favourit page.</p>
                          <span>like them all</span>
                          <Link data-ripple="" title="" to="#">
                            start now!
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="widget friend-list stick-widget">
                      <h4 className="widget-title">Friends</h4>
                      <div id="searchDir"></div>
                      <ul id="people-list" className="friendz-list">
                        <li>
                          <figure>
                            <img src={friendAvatar} alt="" />
                            <span className="status f-online"></span>
                          </figure>
                          <div className="friendz-meta">
                            <Link to="time-line.html">bucky barnes</Link>
                            <i>
                              <Link
                                to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="f2859b9c869780819d9e969780b2959f939b9edc919d9f"
                              >
                                [email&#160;protected]
                              </Link>
                            </i>
                          </div>
                        </li>

                        <li>
                          <figure>
                            <img src={friendAvatar5} alt="" />
                            <span className="status f-online"></span>
                          </figure>
                          <div className="friendz-meta">
                            <Link to="time-line.html">daniel warber</Link>
                            <i>
                              <Link
                                to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="234942504c4d4163444e424a4f0d404c4e"
                              >
                                [email&#160;protected]
                              </Link>
                            </i>
                          </div>
                        </li>
                      </ul>

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
                                <img src={chatList1} alt="" />
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
                                <img src={chatList2} alt="" />
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
                                <img src={chatList1} alt="" />
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
      </div>
    </section>
  );
};

export default Home;
