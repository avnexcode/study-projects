import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center [&>*]:mx-2 [&>*]:text-2xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <div className="mt-40 flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
