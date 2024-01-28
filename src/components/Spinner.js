import React from "react";
import loading from "../Spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={loading}
        alt="loading"
        style={{ height: "100px" }}
        className="sr"
      />
    </div>
  );
};

export default Spinner;
