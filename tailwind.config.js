/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#694e43",
        blue: "#  ",
        lightBlue: "#2D3142",
        grey: "#77716E",
      },
    },
  },
  plugins: [require("daisyui")],
};
