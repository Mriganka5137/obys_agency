/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plain: ["plain-light", "sans-serif"],
        plainRegular: ["plain-regular", "sans-serif"],
        silkserifLightItalic: ["silkserif-lightitalic", "serif"],
        silkserifRegularItalic: ["silkserif-regularitalic", "serif"],
      },
    },
  },
  plugins: [],
};
