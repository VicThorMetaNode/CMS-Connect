/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {
        sm: "0.8rem",
        md: "0.9rem",
        base: "1rem",
        lg: "1.15rem",
        xl: "1.25rem",
      },
      colors: {
        transparent: "transparent",
        main: {
          DEFAULT: "#282626",
          light: "#E7E7E7",
        },
        black: "#282626",
        "alt-black": "#1B1B1B",
        white: "#E7E7E7",
        "alt-white": "#FEFEFE",
        "lite-grey": "#BFAFB2",
        passive: "#A6ADBA",
        "lite-passive": "#d8dbe0",
        "dark-passive": "#595245",
        vamp: "#080808",
      },
      fontFamily: {
        main: ["Mitr ", "sans-serif"],
        sub: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
