import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelationship } from "../../../../../actions/relationship.action";
import Spinner from "../../../../../shared/Spinner";

const Friends = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelationship());
  }, []);
  const { isLoading, relationships } = useSelector((state) => {
    return state.relationshipsReducers;
  });

  return isLoading ? (
    <Spinner />
  ) : (
    relationships.map((r) => (
      <div className="tab-pane active fade show " id="frends">
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

                  
                   {r.receiver.firstName} {r.receiver.lastName}
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
                  add friend
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="lodmore">
          <button className="btn-view btn-load-more"></button>
        </div>
      </div>
    ))
  );
};

export default Friends;
