/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 1s linear infinite",
      },
      boxShadow: {
        shadow: "0 2px 20px #0e1118a4",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
