import React, { useEffect } from "react";
import timeline1 from "../../assets/resources/timeline-1.jpg";
import { Link, Navigate } from "react-router-dom";
import useravatar from "../../assets/images/image00011.jpeg";

import { Routes, Route, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import TimeLine from "./ProfileComponents/TimeLine";
import About from "./ProfileComponents/About";

import { getMyProfile } from "../../actions/profile.action";

import Relationship from "./ProfileComponents/Relationships";
import { getUser, sendFriendRequest } from "../../actions/relationship.action";

const ProfileUser = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const userId = new URLSearchParams(location.search).get("userId");

  const { isLoading, isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser(userId));
    }
  }, [isAuthenticated]);
  const { antherUser } = useSelector((state) => {
    return state.relationshipsReducers;
  });

  const handlerClickSendFriend = (e, id) => {
    e.preventDefault();
    dispatch(sendFriendRequest(id));
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <section>
        <div className="feature-photo">
          <figure>
            <img src={timeline1} alt="" />
          </figure>
          <div className="add-btn">
            <span>1205 followers</span>
            <button className="addFriends"  onClick={(e) => handlerClickSendFriend(e, antherUser._id)} >Add Friend</button>
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
                    <img src="{profile?.avatar}" alt="dd" />
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
                      <h5>
                        {antherUser?.firstName} {antherUser?.lastName}
                      </h5>
                    </li>
                    <li>
                      <Link to="/profileUser/">time line</Link>
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
                      <Link to="/profileUser/relationship">Friends</Link>

                      <Link to="/profileUser/about">about</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bio">
          <h1>BIO</h1>

          <p>{antherUser?.profile?.bio}</p>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<TimeLine />}></Route>

        <Route path="/relationship/*" element={<Relationship />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default ProfileUser;
