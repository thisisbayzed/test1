/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        sm: "0.45rem",
        lg: "1.25rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    fontFamily: {
      poppines: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      colors: {
        "primary-orange": "#FF553C",
        "secondary-black": "#121212",
        "tertiary-gray": "#757575",
        "border-gray": "#DEDEDE",
        warning: "#FCE22A",
      },
      lineHeight: {
        30: "30px",
      },
    },
  },
  plugins: [],
};
