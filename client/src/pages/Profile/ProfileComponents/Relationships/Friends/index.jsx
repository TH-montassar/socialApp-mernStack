import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authcheck } from "../../../../../actions/auth.action";
import {
  getRelationship,
  rejectFriendRequest,
} from "../../../../../actions/relationship.action";
import Spinner from "../../../../../shared/Spinner";

const Friends = () => {
  const dispatch = useDispatch();
  /* This is a React Hook that runs the function passed in the first parameter when the component is mounted. */
  //* query=>   { status: "friends" }

  useEffect(() => {
    dispatch(getRelationship({ status: "friends" }));
  }, []);
  const { isLoading, relationships } = useSelector((state) => {
    return state.relationshipsReducers;
  });
  useEffect(() => {
    dispatch(authcheck());
  }, []);
  const { user } = useSelector((state) => {
    return state.authReducers;
  });
  useEffect(() => {
    console.log("user", user.firstName);
  }, []);

  const handlerClickReject = (e, id) => {
    e.preventDefault();
    dispatch(rejectFriendRequest(id));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    relationships.map((relationship) => (
      <div
        key={relationship._id}
        className="tab-pane active fade show "
        id="frends"
      >
        <ul className="nearby-contct">
          <li>
            <div className="nearly-pepls">
              <figure>
                <a href="time-line.html" title="">
                  <img src="images/resources/friend-avatar9.jpg" alt="" />
                </a>
              </figure>
              <div className="pepl-info">
                <h4>
                  <a href="time-line.html" title="">
                    {relationship.receiver?.firstName === user?.firstName ? (
                      <div>
                        <span>{relationship.sender?.firstName}</span>
                        <span>{relationship.sender?.lastName}</span>
                      </div>
                    ) : (
                      <div>
                        <span>{relationship.receiver?.firstName} </span>
                        <span> {relationship.receiver?.lastName}</span>
                      </div>
                    )}
                  </a>
                </h4>
                <button
                  className="add-butn more-action"
                  onClick={(e) => handlerClickReject(e, relationship._id)}
                >
                  unfriend
                </button>

                <button href="#" title="" className="add-butn" data-ripple="">
                  block Friend
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ))
  );
};

export default Friends;
