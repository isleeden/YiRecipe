import React from "react";
import { Link } from "react-router-dom";
import routes from "routes";

export default function Navbar() {
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          return <Link to={route.path}>{route.name}</Link>;
        })}
      </ul>
    </nav>
  );
}
