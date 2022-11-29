/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lgnbg: "#302938",
        input: "#3b383f",
        text: "#cecece",
        placeholder: "#79767c",
        btn: "#9089F0"
      }
    },
  },
  plugins: [],
}
