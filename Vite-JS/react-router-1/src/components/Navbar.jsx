import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul className="flex justify-center [&>*]:mx-2 text-2xl">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  );
};
export default Navbar;
