import { useState, lazy, Suspense } from "react";

const SocialMedia = lazy(() => import("./SocialMedia"));
const SecondLoader = lazy(() =>
  import("./Loader").then((module) => {
    return { default: module.SecondLoader };
  })
);
const Linked = () => {
  const [link, setLink] = useState(false);
  // const [button, setButtons] = useState();

  // useEffect(() => {
  //   import("../data/Data").then(async (module) => {
  //     const data = await module.data;
  //     const buttonComponents = data.map((item, index) => (
  //       <LinkedButton
  //         key={index}
  //         icon={item.icon}
  //         text={item.name}
  //         url={item.url}
  //         aos={item.aos}
  //         aosOnce={item.aosOnce}
  //       />
  //     ));
  //     setButtons(buttonComponents);
  //   });
  // }, []);
  return (
    <div className="w-full mt-6 flex justify-center items-center">
      <Suspense>
        {!link ? (
          <button
            type="button"
            onClick={() => {
              setLink(true);
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-8 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-duration="2000"
            data-aos-delay="1800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              ContactMe On
            </span>
          </button>
        ) : (
          <SocialMedia link={link} />
        )}
      </Suspense>
    </div>
  );
};

export default Linked;
