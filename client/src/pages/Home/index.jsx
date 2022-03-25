import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import CreatePost from "../../shared/CreatePost";
import Posts from "../../shared/Posts/AllPosts";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="theme-layout">
      <div className="container-fluid gap gray-bg" id="page-contents">
        {/* ----------- */}
        <div className="posts">
          <CreatePost />

          {/* ------------- */}

          <Posts />
        </div>
      </div>
    </section>
  );
};

export default Home;
