import { BsWhatsapp } from "react-icons/bs";
const WaButton = () => {
  return (
    <a
      className="flex p-1 rounded-r-xl justify-center items-center fixed top-[40%] left-0 -translate-x-[70%] hover:-translate-x-[5%] duration-500 opacity-30 hover:opacity-100"
      href="https://wa.me/6285934991303/?text=Hello%20Muhammad%20Fauzi%20Nur%20Aziz.%20I%20want%20to%20talk%20to%20you%20about%20website%20what%20i%20make."
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-green-500 font-fontLink block p-1 bold bg-transparent rounded text-md duration-500">
        Whatsapp me
      </span>
      <BsWhatsapp className="text-4xl bg-green-500 p-1 rounded text-white" />
    </a>
  );
};
export default WaButton;
