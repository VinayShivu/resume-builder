/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-bg": "#EB4747",
        "red-fg": "#FFFFFF",
        "blue-bg": "#1363DF",
        "blue-fg": "#FFFFFF",
        "orange-bg": "#F2781A",
        "orange-fg": "#000000",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Manrope: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
