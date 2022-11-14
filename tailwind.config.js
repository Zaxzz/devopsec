/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue' : "#89B8FF"
    },
    borderRadius: {
      'lg': '40px',
    },
    fontSize: {
      base: '19px',
  },
},
},
  plugins: [require("daisyui")],
}

