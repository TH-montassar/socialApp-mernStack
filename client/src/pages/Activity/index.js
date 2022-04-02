import React, { useEffect } from "react";
import Spinner from "../../shared/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { geActivity } from "../../actions/acitvity.action";

const Activity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(geActivity());
  }, []);
  const { isLoading, activities } = useSelector((state) => {
    return state.activityReducers;
  });
  const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    activities.map((activity) => (
      <div className="tab-content">
        <div className="tab-pane active fade show " id="frends">
          <ul className="nearby-contct">
            <li>
              <div className="nearly-pepls">
                <figure>
                  <a href="time-line.html" title="">
                    <img src="" alt="" />
                  </a>
                </figure>
                <div className="pepl-info">
                  <span>
                    <h4>{activity.action}</h4>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ))
  );
};

export default Activity;
