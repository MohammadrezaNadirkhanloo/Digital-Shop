/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  jit: true,
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Vazirmatn"],
        serif: ["Vazirmatn FD"],
      },
      fontSize: {
        min: "10px",
      },
    },
  },
  plugins: [],
};
