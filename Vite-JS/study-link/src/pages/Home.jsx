import { lazy } from "react";
import {
  webLearning,
  frameWorkJavascript,
  stylingWeb,
  socialMedia,
} from "../data/link";
const ListBox = lazy(() => import("../components/ListBox"));
const Home = () => {
  return (
    <section className="w-[95%] max-w-[600px]">
      <div className="p-5 flex flex-col items-center font-mono mb-4">
        <h1>WEB LEARNING</h1>
        <span>{webLearning.length} item</span>
        {webLearning.map((item, index) => {
          return (
            <ListBox
              key={index}
              name={item.name}
              link={item.link}
              index={index}
            />
          );
        })}
      </div>
      <div className="p-5 flex flex-col items-center font-mono mb-4">
        <h1>JAVASCRIPT FRAMEWORK</h1>
        <span>{frameWorkJavascript.length} item</span>
        {frameWorkJavascript.map((item, index) => {
          return (
            <ListBox
              key={index}
              name={item.name}
              link={item.link}
              index={index}
            />
          );
        })}
      </div>
      <div className="p-5 flex flex-col items-center font-mono mb-4">
        <h1>WEB STYLING</h1>
        <span>{stylingWeb.length} item</span>
        {stylingWeb.map((item, index) => {
          return (
            <ListBox
              key={index}
              name={item.name}
              link={item.link}
              index={index}
            />
          );
        })}
      </div>
      <div className="p-5 flex flex-col items-center font-mono mb-4">
        <h1>SOCIAL MEDIA</h1>
        <span>{socialMedia.length} item</span>
        {socialMedia.map((item, index) => {
          return (
            <ListBox
              key={index}
              name={item.name}
              link={item.link}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Home;
