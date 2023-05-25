/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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