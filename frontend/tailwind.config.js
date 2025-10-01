/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wineDark: "#2e1335",
        wineMid: "#441f4f",
        winePrimary: "#441e50",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
