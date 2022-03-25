import React from "react";
import { Link} from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="theme-layout">
    <div className="container-fluid pdng0">
      <div className="row">
        <div className="col-lg-12">
          <div className="error-page">
            <div className="bg-image"></div>
            <div className="error-meta">
              <h1>whoops!</h1>
              <span>we couldn't find that page </span>
              <Link to="/" title="" >Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ErrorPage;
