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
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "5.5xl": "4.052rem",
        "6xl": "5.052rem",
        "7xl": "7.052rem",
        "8xl": "9.052rem",
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
      },
      colors: {
        transparent: "transparent",
        main: {
          DEFAULT: "#16142F",
          light: "#292562",
        },
        pink: "#D2295A",
        "alt-pink": "#DF7090",
        white: "#FFFFFF",
        "alt-white": "#C7CCDB",
        "alt-blue": "#292562",
        blue: "#242244",
        "blue-bio": "#272456",
        gray: "#242238",
        "alt-gray": "#242244",
        "icon-gray": "#2A324B",
        "blue-connect": "#1D1A3F",
        active: "#ACACE6",
        disabled: "#46405f",
      },
      fontFamily: {
        main: ["Audiowide", "cursive"],
        sub: ["Monda", "sans-serif"],
        abel: ["Abel", "sans-serif"],
        ele: ["Electrolize", "sans-serif"],
        changa: ["Changa", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
