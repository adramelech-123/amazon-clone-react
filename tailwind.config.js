/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazon: {
          background: "#EAEDED",
          DEFAULT: "#131921",
          light_blue: "#232F3A",
          yellow: "#FEBD69"
        }
      }
    },
  },
  plugins: [],
};
