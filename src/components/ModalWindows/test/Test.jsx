import React from "react";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      Test Page
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Test;
