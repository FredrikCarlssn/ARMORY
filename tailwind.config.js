/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#694e43",
        lightBlue: "#2D3142",
        grey: "#77716E",
        page: "#1b1a20",
      },
    },
  },
  plugins: [require("daisyui")],
};
