/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:"#060606",
          100:"#1F1F1F",
          200:"#383838",
          300:"#515151"
        },
        secondary:"#8D2012",
        tert:"#55150C",
        white:"#FEF7FF",
        text:"#0E0B11",
      },

      screens : {
        "mobile" : {"max" : "1023px", "min" : "0px"},
        "desktop" : {"min": "1024px"}
      }
    },
  },
  plugins: [],
}