import React from "react";
import timeline1 from "../../assets/resources/timeline-1.jpg";
import { Link } from "react-router-dom";
import useravatar from "../../assets/resources/user-avatar.jpg";
import CreatePost from "../../shared/CreatePost";
import Posts from "../../shared/Posts";
import MyPosts from "../../shared/Posts/MyPosts";

const Profile = () => {



  return (
    <div>
      <section>
        <div className="feature-photo">
          <figure>
            <img src={timeline1} alt="" />
          </figure>
          <div className="add-btn">
            <span>1205 followers</span>
            <Link to="#" title="" data-ripple="">
              Add Friend
            </Link>
          </div>
          <form className="edit-phto">
            <i className="fa fa-camera-retro"></i>
            <label className="fileContainer">
              Edit Cover Photo
              <input type="file" />
            </label>
          </form>
          <div className="container-fluid">
            <div className="row merged">
              <div className="col-lg-2 col-sm-3">
                <div className="user-avatar">
                  <figure>
                    <img src={useravatar} alt="" />
                    <form className="edit-phto">
                      <i className="fa fa-camera-retro"></i>
                      <label className="fileContainer">
                        Edit Display Photo
                        <input type="file" />
                      </label>
                    </form>
                  </figure>
                </div>
              </div>
              <div className="col-lg-10 col-sm-9">
                <div className="timeline-info">
                  <ul>
                    <li className="admin-name">
                      <h5>Janice Griffith</h5>
                      <span>Group Admin</span>
                    </li>
                    <li>
                      <Link
                        className="active"
                        to="time-line.html"
                        title=""
                        data-ripple=""
                      >
                        time line
                      </Link>
                      <Link
                        className=""
                        to="timeline-photos.html"
                        title=""
                        data-ripple=""
                      >
                        Photos
                      </Link>
                      <Link
                        className=""
                        to="timeline-videos.html"
                        title=""
                        data-ripple=""
                      >
                        Videos
                      </Link>
                      <Link
                        className=""
                        to="timeline-friends.html"
                        title=""
                        data-ripple=""
                      >
                        Friends
                      </Link>
                      <Link
                        className=""
                        to="timeline-groups.html"
                        title=""
                        data-ripple=""
                      >
                        Groups
                      </Link>
                      <Link
                        className=""
                        to="about.html"
                        title=""
                        data-ripple=""
                      >
                        about
                      </Link>
                      <Link className="" to="#" title="" data-ripple="">
                        more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                              <i className="fa fa-google"></i>{" "}
                              <span>google</span>
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
                      <div className="widget">
                        <h4 className="widget-title">Recent Activity</h4>
                        <ul className="activitiez">
                          <li>
                            <div className="activity-meta">
                              <i>10 hours Ago</i>
                              <span>
                                <a href="#" title="">
                                  Commented on Video posted{" "}
                                </a>
                              </span>
                              <h6>
                                by <a href="newsfeed.html">black demon.</a>
                              </h6>
                            </div>
                          </li>
                          <li>
                            <div className="activity-meta">
                              <i>30 Days Ago</i>
                              <span>
                                <a href="newsfeed.html" title="">
                                  Posted your status. “Hello guys, how are you?”
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="activity-meta">
                              <i>2 Years Ago</i>
                              <span>
                                <a href="#" title="">
                                  Share a video on her timeline.
                                </a>
                              </span>
                              <h6>
                                "
                                <a href="newsfeed.html">
                                  you are so funny mr.been.
                                </a>
                                "
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
                              <img
                                src="images/resources/friend-avatar2.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a href="time-line.html" title="">
                                  Kelly Bill
                                </a>
                              </h4>
                              <a href="#" title="" className="underline">
                                Add Friend
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar4.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a href="time-line.html" title="">
                                  Issabel
                                </a>
                              </h4>
                              <a href="#" title="" className="underline">
                                Add Friend
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar6.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a href="time-line.html" title="">
                                  Andrew
                                </a>
                              </h4>
                              <a href="#" title="" className="underline">
                                Add Friend
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar8.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a href="time-line.html" title="">
                                  Sophia
                                </a>
                              </h4>
                              <a href="#" title="" className="underline">
                                Add Friend
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar3.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a href="time-line.html" title="">
                                  Allen
                                </a>
                              </h4>
                              <a href="#" title="" className="underline">
                                Add Friend
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  {/*<!-- centerl meta --> */}
                  <div className="col-lg-6">
                    <div className="loadMore">


                      <CreatePost/>

                      {/* <MyPosts/> */}
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
                        <h4 className="widget-title">Friends</h4>
                        <div id="searchDir"></div>
                        <ul id="people-list" className="friendz-list">
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar.jpg"
                                alt=""
                              />
                              <span className="status f-online"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">bucky barnes</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="4136282f352433322e2d25243301262c20282d6f222e2c"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar2.jpg"
                                alt=""
                              />
                              <span className="status f-away"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">Sarah Loren</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="3a585b48545f497a5d575b535614595557"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar3.jpg"
                                alt=""
                              />
                              <span className="status f-off"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">jason borne</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="127873617d7c7052757f737b7e3c717d7f"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar4.jpg"
                                alt=""
                              />
                              <span className="status f-off"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">Cameron diaz</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="620803110d0c0022050f030b0e4c010d0f"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar5.jpg"
                                alt=""
                              />
                              <span className="status f-online"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">daniel warber</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="0963687a66676b496e64686065276a6664"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar6.jpg"
                                alt=""
                              />
                              <span className="status f-away"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">andrew</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="5b313a283435391b3c363a323775383436"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar7.jpg"
                                alt=""
                              />
                              <span className="status f-off"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">amy watson</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="472d263428292507202a262e2b6924282a"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar5.jpg"
                                alt=""
                              />
                              <span className="status f-online"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">daniel warber</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="7a101b091514183a1d171b131654191517"
                                >
                                  [email&#160;protected]
                                </a>
                              </i>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="images/resources/friend-avatar2.jpg"
                                alt=""
                              />
                              <span className="status f-away"></span>
                            </figure>
                            <div className="friendz-meta">
                              <a href="time-line.html">Sarah Loren</a>
                              <i>
                                <a
                                  href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="7c1e1d0e12190f3c1b111d1510521f1311"
                                >
                                  [email&#160;protected]
                                </a>
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
                                  <img
                                    src="images/resources/chatlist1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="notification-event">
                                  <span className="chat-message-item">
                                    Hi James! Please remember to buy the food
                                    for tomorrow! I’m gonna be handling the
                                    gifts and Jake’s gonna get the drinks
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
                                    Hi James! Please remember to buy the food
                                    for tomorrow! I’m gonna be handling the
                                    gifts and Jake’s gonna get the drinks
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
                                    Hi James! Please remember to buy the food
                                    for tomorrow! I’m gonna be handling the
                                    gifts and Jake’s gonna get the drinks
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
    </div>
  );
};

export default Profile;
