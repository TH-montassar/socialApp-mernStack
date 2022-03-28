import React from "react";
import Friends from "./Friends";
import { Routes, Route, Link } from "react-router-dom";
import FriendRequest from "./FriendRequests";
const Relationship = () => {
  return (
    <div>
      <div className="col-lg-6">
        <div className="central-meta">
          <div className="frnds">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to="#" className="active">
                  My Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#">Friend Requests</Link>
              </li>
            </ul>

            <div className="tab-content">
              <Routes>
                <Route exact path="/" element={<Friends />}></Route>
                <Route exact path="/request" element={<FriendRequest />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relationship;
