import { BsToggleOn, BsToggle2Off } from "react-icons/bs";
const DarkModeButton = ({ handleThemeSwitch, theme }) => {
  return (
    <div className="absolute bg-[white] px-[6px] flex items-center justify-center rounded-3xl opacity-70">
      <button
        onClick={() => {
          handleThemeSwitch();
        }}
        className="text-slate-900 text-3xl rounded-br-xl"
      >
        {theme === "dark" ? <BsToggle2Off /> : <BsToggleOn />}
      </button>
    </div>
  );
};
export default DarkModeButton;
