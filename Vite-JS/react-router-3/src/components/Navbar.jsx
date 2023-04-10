import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
