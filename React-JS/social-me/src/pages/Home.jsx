import { lazy } from "react";

const Header = lazy(() => import("../components/Header"));
const Profile = lazy(() => import("../components/Profile"));
const About = lazy(() => import("../components/About"));
const Linked = lazy(() => import("../components/Linked"));
const WaButton = lazy(() => import("../components/WaButton"));

const Home = ({ handleThemeSwitch, theme }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[97%] max-w-[720px]">
        <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <Profile theme={theme} />
        <About />
        <Linked />
        <WaButton />
      </div>
    </div>
  );
};

export default Home;
