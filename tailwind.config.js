/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      //Galaxy Fold
      'xs': '280px',
      //Se toma como referencia iphoneX
      '375': '375px',
      ...defaultTheme.screens
    },
    fontFamily: {
      'Raleway': ['Raleway', 'sans-serif'],
      'Kanit': ['Kanit', 'sans-serif'],
      'victorMono': ['Victor Mono', 'sans-serif'],
      'victorMonoBold': ['Victor Mono Bold', 'sans-serif']
    },
    minWidth: {
      '0': '0',
      '280': '280px',
      'full': '100%',
    },
  },
  plugins: [],
  darkMode: "class"
}