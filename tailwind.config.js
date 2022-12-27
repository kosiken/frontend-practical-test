/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#2C3878',
        secondary: '#DFD9F9',
        darkGrey: '#333333',
        lightGrey: '#9C9C9C',
        iconColor: '#D9D9D9'
       }
    },
  },
  plugins: [],
}
