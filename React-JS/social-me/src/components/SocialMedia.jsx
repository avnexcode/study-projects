import { lazy } from "react";
import { data } from "../data/Data";
const LinkedButton = lazy(() => import("./LinkedButton"));
const SocialMedia = ({ link }) => {
  return (
    <div>
      <div
        className={
          !link
            ? "flex flex-col items-center scale-0"
            : "flex flex-col items-center scale-100 duration-500"
        }
      >
        {data.map((item, index) => {
          return (
            <LinkedButton
              key={index}
              icon={item.icon}
              text={item.name}
              url={item.url}
              aos={item.aos}
              aosOnce={item.aosOnce}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SocialMedia;
