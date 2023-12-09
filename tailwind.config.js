/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: '#1967D2',
        hover: '#1451a4',
        black1: '#202124',
        sectionbg: '#F3F4F6',
        textColor: '#77838F',
      }
    },
  },
  plugins: [require("daisyui")],
}