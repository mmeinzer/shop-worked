import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Not Found</h1>
      <h2 className="subtitle">
        The page you're looking for doesn&#39;t exist.
      </h2>
      <Link to="/" className="button">
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
