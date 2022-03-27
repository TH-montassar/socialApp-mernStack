import React from "react";
import "./style.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <span
        style={{
          top: "calc( 50% - ( 80px / 2) )",
          left: "calc( 50% - ( 80px / 2) )",
        }}
      >
        <i className="fas fa-circle-notch fa-spin fa-5x "	></i>
      </span>
    </div>
  );
};

export default Spinner;
