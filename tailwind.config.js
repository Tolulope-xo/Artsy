/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'color1': 'rgba(70, 147, 237, 1)',
      'color2': 'rgba(121, 194, 210, 1)',
      'color3': 'rgba(192, 86, 9, 0.49)',
    },
    animation: {
      'fade': 'fade 10s infinite',

    },
    opacity: {
      '0': '0',
    },
    keyframes: {
      fade: {
        '0%': {  opacity: 0},
        '33.3%': {  opacity: 1 },
        '66.66%': {  opacity: 0},
        '100%': {  opacity: 0 },
      },
    },
   
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}