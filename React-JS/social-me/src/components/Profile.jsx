import profileImage from "../assets/main-profile.jpg";
import React from "react";
const Profile = ({ theme }) => {
  const [image, setImage] = React.useState();
  React.useEffect(() => {
    setImage(profileImage);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-1 font-fontHead text-black dark:text-white">
      <img
        src={image}
        alt="aziz"
        className="w-[200px] rounded-full mb-1 border-4 border-white"
        data-aos="flip-left"
        data-aos-duration="2000"
        data-aos-once="true"
        data-aos-delay="500"
      />
      <svg
        id="10015.io"
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[345px] -z-50"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="true"
        data-aos-delay="100"
      >
        <path
          fill={theme === "dark" ? "purple" : "rgb(228, 93, 228)"}
          d="M399,262.5Q377,285,400.5,329.5Q424,374,365,352.5Q306,331,309.5,398Q313,465,276.5,471.5Q240,478,206,463.5Q172,449,149.5,422Q127,395,111.5,370Q96,345,90.5,317.5Q85,290,64.5,265Q44,240,41,207Q38,174,77,162Q116,150,125.5,123Q135,96,161.5,88.5Q188,81,214,58.5Q240,36,274.5,32.5Q309,29,328.5,60.5Q348,92,378.5,104.5Q409,117,378,161Q347,205,384,222.5Q421,240,399,262.5Z"
        />
      </svg>
      <h1 className="text-lg dark:text-[#f06837] text-[#ee5a24]">@avnexcode</h1>
    </div>
  );
};
export default Profile;
