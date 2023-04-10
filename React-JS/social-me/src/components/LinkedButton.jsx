const LinkedButton = ({ icon, text, url, aos, aosOnce }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="relative inline-flex items-center justify-center p-0.5 mb-8 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-105 duration-300"
      data-aos={aos}
      data-aos-duration="1500"
      data-aos-once={aosOnce}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-150 bg-slate-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex justify-center items-center [&>*]:mx-1 w-[300px] sm:w-[320px] md:w-[340px] text-lg font-fontLink">
        {icon}
        <span className="dark:text-white font-semibold text-xl">{text}</span>
      </span>
    </a>
  );
};
export default LinkedButton;
