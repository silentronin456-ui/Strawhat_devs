/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'strawhat-red': '#9c1c1c', 
        'strawhat-yellow': '#d8b671', 
        'neu-bg-light': '#e0e5ec',
        'neu-bg-dark': '#1a1b1e',
      },
      boxShadow: {
        'neu-light': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        'neu-dark': '9px 9px 16px rgb(0,0,0,0.6), -9px -9px 16px rgba(45,45,45, 0.5)',
        'neu-pressed-light': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
        'neu-pressed-dark': 'inset 6px 6px 10px 0 rgba(0,0,0, 0.8), inset -6px -6px 10px 0 rgba(45,45,45, 0.8)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
