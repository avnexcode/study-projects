/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "my-font": ["Signika", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "love-1": "url('./assets/img/loveballon/love-1.png')",
      },
      animation: {
        "spin-one": "spin 1s linear 1",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
