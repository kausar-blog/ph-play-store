import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/">
          <button className="btn bg-purple-500">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
