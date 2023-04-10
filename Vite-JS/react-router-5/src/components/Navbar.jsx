import { Link, Outlet } from "react-router-dom";
import React from "react";
export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-2">
        <h2 className="text-3xl">Navi</h2>
        <ul className="flex [&>*]:mx-2 text-2xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <div>
        <React.Suspense fallback={<h3 className="text-3xl">Loading...</h3>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
};
