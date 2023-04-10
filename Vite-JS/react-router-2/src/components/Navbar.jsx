import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="[&>*]:mx-2 flex justify-center text-2xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <div className="flex justify-center mt-40">
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
