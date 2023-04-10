import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, lazy, Suspense } from "react";
import { wait } from "./data/Module";

const Home = lazy(() => wait(3000).then(() => import("./pages/Home")));
const FirstLoader = lazy(() =>
  import("./components/Loader").then((module) => {
    return { default: module.FirstLoader };
  })
);

const App = () => {
  const documentTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Hey, Come back please! 😥";
  });
  window.addEventListener("focus", () => {
    document.title = "Love Youuu...💖";
    setTimeout(() => {
      document.title = documentTitle;
    }, 1000);
  });

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    AOS.init({
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<FirstLoader />}>
        <Home handleThemeSwitch={handleThemeSwitch} theme={theme} />;
      </Suspense>
    </div>
  );
};

export default App;
