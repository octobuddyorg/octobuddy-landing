import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-[url('/images/body-bg.png')]",
    "bg-[url('/images/body-bg-blur.png')]",
  ],
  theme: {
    screens: {
      xsm: "425px",
      // => @media (min-width: 425px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "767px",
      // => @media (min-width: 767px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl2: "1367px",
      // => @media (min-width: 1367px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
      xxxl: "2550px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"],
        Inter: ['"Inter"', "sans-serif"],
        ibrand: ['"ibrand"', "sans-serif"],
        nok: ['"nok"', "sans-serif"],
      },
      colors: {
        primary: "#12A4EA",
        warning: "#F4A640",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
