import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authcheck } from "../../../../../actions/auth.action";
import { getRelationship } from "../../../../../actions/relationship.action";
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
    console.log("user", user);
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
    relationships.map((r) => (
      <div key={r._id} className="tab-pane active fade show " id="frends">
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
                    {r.receiver?.firstName} {r.receiver?.lastName}
                  </a>
                </h4>

                <a
                  href="#"
                  title=""
                  className="add-butn more-action"
                  data-ripple=""
                >
                  unfriend
                </a>
                <a href="#" title="" className="add-butn" data-ripple="">
                  {}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ))
  );
};

export default Friends;
