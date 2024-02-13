import React from "react";
import { Link } from "react-router-dom";

function AuthModal() {
  return (
    <div>
      <h1>AuthModal</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default AuthModal;
