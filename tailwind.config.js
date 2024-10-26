import breakpoint from './src/app/types/constants/constant-breakpoint';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      // => @media (min-width: 480px) { ... }
      xsm: `${breakpoint.xsm}px`,

      // => @media (min-width: 640px) { ... }
      sm: `${breakpoint.sm}px`,

      // => @media (min-width: 768px) { ... }
      md: `${breakpoint.md}px`,

      // => @media (min-width: 1024px) { ... }
      lg: `${breakpoint.lg}px`,

      // => @media (min-width: 1280px) { ... }
      xl: `${breakpoint.xl}px`,

      // => @media (min-width: 1536px) { ... }
      "2xl": `${breakpoint["2xl"]}px`,

      // => @media (min-width: 1920px) { ... }
      "3xl": `${breakpoint["3xl"]}px`,
    },

    extend: {
      colors: {
        'light-petrol-blue': "#00657f",  // color del manual de la marca Bios
        'dark-petrol-blue': "#004853",   // color del manual de la marca Bios

        'light-green-pantone': "#aacf00", // color del manual de la marca Bios
        'active-color': "#5fd068",

        'dark-orange-yellow': "#c57f1e",

        'light-beige': "#ecebe0",         // color del manual de la marca Bios
        'medium-beige': "#f5f0eb",
        'dark-beige': "#666666",

        'error-color': "#761200",
      },
    },
  },
  plugins: [],
};
