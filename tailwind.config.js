/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dancingScript': ['Dancing Script', 'cursive'],
      'baskerville': ['Libre Baskerville', 'serif'],
      'victorMono': ['Victor Mono', 'sans-serif'],
      'victorMonoItalic': ['Victor Mono Italic', 'sans-serif'],
      'victorMonoBold': ['Victor Mono Bold', 'sans-serif']
    }
  },
  plugins: [],
}