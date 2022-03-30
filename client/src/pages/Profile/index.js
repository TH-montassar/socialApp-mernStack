import React, { useEffect } from "react";
import timeline1 from "../../assets/resources/timeline-1.jpg";
import { Link, Navigate } from "react-router-dom";
import useravatar from "../../assets/images/image00011.jpeg";

import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import TimeLine from "./ProfileComponents/TimeLine";
import About from "./ProfileComponents/About";

import { getMyProfile } from "../../actions/profile.action";
import UpdateProfile from "./ProfileComponents/UpdateProfile";
import Relationship from "./ProfileComponents/Relationships";

const Profile = () => {
  const dispatch = useDispatch();

  const { isLoading, isAuthenticated, user } = useSelector((state) => {
    return state.authReducers;
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getMyProfile());
    }
  }, [isAuthenticated]);
  const { profile } = useSelector((state) => {
    return state.profileReducers;
  });

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <section>
        <div className="feature-photo">
          <figure>
            <img src={profile?.cover} alt="" />
          </figure>
          <div className="add-btn">
            <span>1205 followers</span>
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
                    <img src={profile?.avatar} alt="" />
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
                        {user?.firstName} {user?.lastName}
                      </h5>
                    </li>
                    <li>
                      <Link to="/profile/">time line</Link>
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
                      <Link to="/profile/relationship">Friends</Link>

                      <Link to="/profile/about">about</Link>
                      <Link className="" to="/profile/edit">
                        Edit Basic Information
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bio">
          <h1>BIO</h1>

          <p>{profile?.bio}</p>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<TimeLine />}></Route>
        <Route path="/edit" element={<UpdateProfile />}></Route>
        <Route path="/relationship/*" element={<Relationship />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default Profile;
