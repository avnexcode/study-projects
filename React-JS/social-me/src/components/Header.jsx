import headerImage from "../assets/assets-copy/main-header.jpg";
import DarkModeButton from "./DarkModeButton";
import React from "react";
const Header = ({ handleThemeSwitch, theme }) => {
  const [image, setImage] = React.useState();

  React.useEffect(() => {
    setImage(headerImage);
  }, []);

  return (
    <div
      className="flex justify-center items-center relative"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-duration="2000"
      data-aos-delay="1500"
    >
      <img src={image} alt="header" className="rounded-b-3xl opacity-100" />
      <DarkModeButton handleThemeSwitch={handleThemeSwitch} theme={theme} />
    </div>
  );
};
export default Header;
