/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./web/src/**/*.{js,jsx,ts,tsx}",
    "./web/index.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1c4587",
      },
    },
  },
  plugins: [],
}

