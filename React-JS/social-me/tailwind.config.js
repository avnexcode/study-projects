/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fontLink: ["EB Garamond", "Roboto", "serif", "sans-serif"],
        fontHead: ["Titan One", "serif", "sans-serif"],
        fontText: ["Poppins", "Roboto", "sans-serif", "serif"],
      },
    },
  },
  plugins: [],
};
