import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getUsers, sendFriendRequest } from "../../actions/relationship.action";
import Spinner from "../../shared/Spinner";
const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const { isLoading, users } = useSelector((state) => {
    return state.relationshipsReducers;
  });
  const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });

  const handlerClickReject = (e, id) => {
    e.preventDefault();

    dispatch(sendFriendRequest(id));
  };
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="tab-content">
      {users.map((user) => (
        <div key={user._id} className="tab-pane active fade show " id="frends">
          <ul className="nearby-contct">
            <li>
              <div className="nearly-pepls">
                <figure>
                  <a href="time-line.html" title="">
                    <img src={user.profile?.avatar} alt="" />
                  </a>
                </figure>
                <div className="pepl-info">
                  <h4>
                    <Link to="#">
                      {user.firstName} {user.lastName}
                    </Link>
                  </h4>
                  <button
                    className="add-butn more-action"
                    onClick={(e) => handlerClickReject(e, user._id)}
                  >
                    add Friends
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;
