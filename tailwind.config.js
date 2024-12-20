/** @type {import('tailwindcss').Config} */
const { default: gradient } = require('@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "375px", max: "767px" },
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
      body: ["Josefin Sans", "sans-serif"],
    },

    colors: {
      // primary: 'var(--color-primary)',
      // secondary: 'var(--color-secondary)',
      // textCol: 'var(--color-text)',
      // backgroundCol: 'var(--color-background)',
      // accent: 'var(--color-accent)',

      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        DEFAULT: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
        950: "var(--color-primary-950)",
      },
      secondary: {
        50: "var(--color-secondary-50)",
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        DEFAULT: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
        950: "var(--color-secondary-950)",
      },
      third: {
        100: "var(--color-third-100)",
        200: "var(--color-third-200)",
        300: "var(--color-third-300)",
        400: "var(--color-third-400)",
        DEFAULT: "var(--color-third-500)",
        600: "var(--color-third-600)",
        700: "var(--color-third-700)",
        800: "var(--color-third-800)",
        900: "var(--color-third-900)",
      },
      textCol: {
        50: "var(--color-text-50)",
        100: "var(--color-text-100)",
        200: "var(--color-text-200)",
        300: "var(--color-text-300)",
        400: "var(--color-text-400)",
        DEFAULT: "var(--color-text-500)",
        600: "var(--color-text-600)",
        700: "var(--color-text-700)",
        800: "var(--color-text-800)",
        900: "var(--color-text-900)",
        950: "var(--color-text-950)",
      },
      backgroundCol: {
        50: "var(--color-background-50)",
        100: "var(--color-background-100)",
        200: "var(--color-background-200)",
        300: "var(--color-background-300)",
        400: "var(--color-background-400)",
        DEFAULT: "var(--color-background-500)",
        600: "var(--color-background-600)",
        700: "var(--color-background-700)",
        800: "var(--color-background-800)",
        900: "var(--color-background-900)",
        950: "var(--color-background-950)",
      },
      accent: {
        50: "var(--color-accent-50)",
        100: "var(--color-accent-100)",
        200: "var(--color-accent-200)",
        300: "var(--color-accent-300)",
        400: "var(--color-accent-400)",
        DEFAULT: "var(--color-accent-500)",
        600: "var(--color-accent-600)",
        700: "var(--color-accent-700)",
        800: "var(--color-accent-800)",
        900: "var(--color-accent-900)",
        950: "var(--color-accent-950)",
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

      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideUp: {
          "100%": { transform: "translateY(0)", opacity: 1 },
          "0%": { transform: "translateY(-10%)", opacity: 0 },
        },
      },

      animation: {
        slideDown: "slideDown 0.5s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards"
      },

      gradient: {
        gradToB: "from-current to-transparent",
      },

      // variants: {
      //extend:{transitionProperty: [
      //     "responsive",
      //     "motion-safe",
      //     "motion-reduce",
      //     "hover",
      //     "focus",
      //   ]}
      //
      // },
    },
  },
  plugins: [],
});
