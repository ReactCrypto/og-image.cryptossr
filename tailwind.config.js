/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: {
          50: "#fee6e6",
          100: "#fecdcd",
          150: "#fdb4b4",
          200: "#fc9c9c",
          250: "#fc8383",
          300: "#fb6a6a",
          350: "#fb5151",
          400: "#fa3838",
          450: "#f91f1f",
          500: "#f90606",
          550: "#e00606",
          600: "#c70505",
          650: "#ae0404",
          700: "#950404",
          750: "#7c0303",
          800: "#630303",
          850: "#4b0202",
          900: "#320101",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
