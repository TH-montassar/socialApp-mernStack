import React from "react";

const FriendRequest = () => {
  return (
    <div className="tab-pane active fade show" id="frends-req">
    <ul className="nearby-contct">
    
      <li>
        <div className="nearly-pepls">
          <figure>
            <a href="time-line.html" title="">
              <img src="images/resources/nearly1.jpg" alt="" />
            </a>
          </figure>
          <div className="pepl-info">
            <h4>
              <a href="time-line.html" title="">
                sophia Gate
              </a>
            </h4>
            <span>ftv model</span>
            <a
              href="#"
              title=""
              className="add-butn more-action"
              data-ripple=""
            >
              delete Request
            </a>
            <a href="#" title="" className="add-butn" data-ripple="">
              Confirm
            </a>
          </div>
        </div>
      </li>
     
    </ul>
    <button className="btn-view btn-load-more"></button>
  </div>
  );
};

export default FriendRequest;
