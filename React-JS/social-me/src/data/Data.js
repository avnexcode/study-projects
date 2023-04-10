import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaDiscord, FaInstagramSquare } from "react-icons/fa";
import { SiGithub, SiReplit } from "react-icons/si";
import { MdEmail } from "react-icons/md";
export const data = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/fauzi.jpeg_/",
    icon: (
      <FaInstagramSquare className="text-2xl text-[#fe5674] bg-white rounded" />
    ),
    aos: "fade-left",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/axnvee.axnvee",
    icon: (
      <BsFacebook className="text-2xl text-[#5865f0] bg-white p-[1px] rounded-xl" />
    ),
    aos: "fade-right",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-fauzi-nur-aziz-511b8b241/",
    icon: (
      <BsLinkedin className="text-2xl text-[#0a66c2] bg-white p-[1px] rounded-md" />
    ),
    aos: "fade-left",
  },
  {
    name: "Discord",
    url: "https://www.discordapp.com/users/689658316661719061",
    icon: (
      <FaDiscord className="text-2xl bg-[#5865f0] text-white rounded-full p-[2.5px]" />
    ),
    aos: "fade-right",
  },
  {
    name: "Email",
    url: "mailto:axnvee18@gmail.com?subject=Introduction&body=Hello%20Muhammad%20Fauzi%20Nur%20Aziz.%20I%20want%20to%20talk%20to%20you%20about%20website%20what%20i%20make.",
    icon: <MdEmail className="text-2xl text-[#5f00d1] bg-white rounded-md" />,
    aos: "fade-left",
  },
  {
    name: "Github",
    url: "https://github.com/avnexcode",
    icon: <SiGithub className="text-2xl text-black dark:text-white" />,
    aos: "fade-right",
  },
  {
    name: "Replit",
    url: "https://replit.com/@axnvee18",
    icon: <SiReplit className="text-2xl text-black dark:text-white" />,
    aos: "fade-left",
  },
];

