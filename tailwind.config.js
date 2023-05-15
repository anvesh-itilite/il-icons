/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      background: "#f1f3f5",
      gray: {
        50: "#f9fafb",
        80: "#f1f3f5",
        100: "#e5e9ed",
        200: "#d3d8df",
        300: "#b6bac3",
        400: "#868d9a",
        500: "#6b7280",
        600: "#4d5668",
        700: "#363e4f",
        800: "#212837",
        900: "#111827",
      },
      orange: {
        50: "#fff1e1",
        80: "#ffe9cf",
        100: "#ffe0bc",
        200: "#fec48c",
        300: "#faa666",
        400: "#f58235",
        500: "#ec5d25",
        600: "#b94710",
        700: "#893404",
        800: "#632501",
        900: "#471700",
      },
      blue: {
        50: "#ebf8ff",
        80: "#d2edff",
        100: "#b9e2ff",
        200: "#86cbff",
        300: "#60acff",
        400: "#3d89ff",
        500: "#0a65e7",
        600: "#054db9",
        700: "#033a94",
        800: "#0b2e70",
        900: "#001f5c",
      },
      green: {
        50: "#d9fbe5",
        80: "#c2f4d5",
        100: "#abeec4",
        200: "#70dc9d",
        300: "#4bc17f",
        400: "#2ea363",
        500: "#1b7e49",
        600: "#116238",
        700: "#044e2a",
        800: "#003d20",
        900: "#002d18",
      },
      yellow: {
        50: "#fffbe0",
        80: "#fceeaf",
        100: "#fae17d",
        200: "#eac54f",
        300: "#d4a72c",
        400: "#bf8700",
        500: "#9a6700",
        600: "#7d4e00",
        700: "#633c01",
        800: "#4d2d00",
        900: "#3b2300",
      },
      red: {
        50: "#fff1f0",
        80: "#ffdfde",
        100: "#ffcecb",
        200: "#ffaba9",
        300: "#ff8183",
        400: "#fa454c",
        500: "#cf2231",
        600: "#a40e29",
        700: "#820720",
        800: "#660019",
        900: "#4c0015",
      },
      purple: {
        50: "#fcf5ff",
        80: "#f3e7ff",
        100: "#ead9ff",
        200: "#d4baff",
        300: "#bc9aff",
        400: "#9b79f9",
        500: "#7855df",
        600: "#5d3ac2",
        700: "#4a2b9e",
        800: "#38207f",
        900: "#281566",
      },
    },
    screens: {
      sm: "760px",
      // => @media (min-width: 760px) { ... }

      md: "1200px",
      // => @media (min-width: 1200px) { ... }

      lg: "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      backgroundSize: {
        double: "200%",
      },
      borderRadius: {
        smol: "0.25rem",
      },
      fontSize: {
        largetitle: ["2.125rem", "2.625rem"],
        title1: ["1.75rem", "2.125rem"],
        title2: ["1.375rem", "1.75rem"],
        title3: ["1.25rem", "1.5rem"],
        body1: ["1.0625rem", "1.5rem"],
        body2: ["0.875rem", "1.25rem"],
        footnote: ["0.8125rem", "1.125rem"],
        caption1: ["0.75rem", "1rem"],
        caption2: ["0.6875rem", "0.875rem"],
      },
      boxShadow: {
        cardborder: "inset 0 0 4px 4px blue",
        leftpanel: "1px 0px 2px 0px #1118271a, 4px 0px 8px 0px #11182726",
      },
      animation: {
        recommendation: "recommendation 8s infinite",
        shimmerbg: "shimmerbg linear 2s infinite",
      },
      keyframes: {
        recommendation: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(80px, -80px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-80px, 80px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        shimmerbg: {
          "0%": {
            backgroundPosition: "100%",
          },
          "100%": {
            backgroundPosition: "-100%",
          },
        },
      },
    },
  },
  plugins: [],
};
