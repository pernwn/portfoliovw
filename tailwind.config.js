/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },

    fontSize: {
      "3xs": "0.750rem",
      xs: "1rem",
      ss: "1.333rem",
      sm: "1.777rem",
      md: "2.369rem",
      lg: "3.158rem",
      xl: "4.210rem",
      "2xl": "5rem",
    },

    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },

    colors: {
      primary: {
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)"
      },
      secondary: {
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)"
      },
      third: {
        100: "var(--color-third-100)",
        200: "var(--color-third-200)",
        300: "var(--color-third-300)",
        400: "var(--color-third-400)",
        500: "var(--color-third-500)",
        600: "var(--color-third-600)",
        700: "var(--color-third-700)",
        800: "var(--color-third-800)",
        900: "var(--color-third-900)"
      },
      text: {
        100: "var(--color-text-100)",
        200: "var(--color-text-200)",
        300: "var(--color-text-300)",
        400: "var(--color-text-400)",
        500: "var(--color-text-500)",
        600: "var(--color-text-600)",
        700: "var(--color-text-700)",
        800: "var(--color-text-800)",
        900: "var(--color-text-900)"
      },
      bg: {
        100: "var(--color-bg-100)",
        200: "var(--color-bg-200)",
        300: "var(--color-bg-300)",
        400: "var(--color-bg-400)",
        500: "var(--color-bg-500)",
        600: "var(--color-bg-600)",
        700: "var(--color-bg-700)",
        800: "var(--color-bg-800)",
        900: "var(--color-bg-900)"
      },
      accent: {
        100: "var(--color-accent-100)",
        200: "var(--color-accent-200)",
        300: "var(--color-accent-300)",
        400: "var(--color-accent-400)",
        500: "var(--color-accent-500)",
        600: "var(--color-accent-600)",
        700: "var(--color-accent-700)",
        800: "var(--color-accent-800)",
        900: "var(--color-accent-900)"
      },
      current: "currentColor",
    },

      lightShade: {
        50: "#fdfcfd",
        100: "#f8f7f9",
        200: "#f5f3f6",
        300: "#f0eef2",
        400: "#edeaf0",
        500: "#e9e5ec",
        600: "#d4d0d7",
        700: "#a5a3a8",
        800: "#807e82",
        900: "#626063",
      },
      darkShade: {
        50: "#e8e7e9",
        100: "#b7b3b9",
        200: "#948f98",
        300: "#635c68",
        400: "#453c4b",
        500: "#160b1e",
        600: "#140a1b",
        700: "#100815",
        800: "#0c0611",
        900: "#09050d",
      },
    },

    extend: {
      spacing: {
        96: "24rem",
        128: "32rem",
      },

      variants: {
        transitionProperty: [
          "responsive",
          "motion-safe",
          "motion-reduce",
          "hover",
          "focus",
        ],
      },
    },
  },
  plugins: [],
});
