/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Inter"'],
    },
    extend: {},
    screens: {
      xl: { max: "1200px" },
      xlg: { max: "1090px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      mdd: { max: "690px" },
      sm: { max: "550px" },
      smm: { max: "470px" },
      xsm: { max: "375px" },
      mdmin: { min: "767px" },
    },
  },
  plugins: [],
};
