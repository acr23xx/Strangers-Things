import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Navigation">
      <Link to="/">Posts</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/CreatePost">Create Post</Link>
      <Link className="Logout" to="/HomePage">
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
