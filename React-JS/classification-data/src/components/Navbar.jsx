const Navbar = () => (
  <nav className="flex justify-between p-2">
    <h1>Navi</h1>
    <ul className="flex [&>*]:px-2 items-center">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Produk</a>
      </li>
      <li>
        <a href="/">Samsudin</a>
      </li>
    </ul>
  </nav>
);
export default Navbar;
