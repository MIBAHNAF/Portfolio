/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#0f172a',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white': '4px  4px 0 #fff',
      },
    },
  },
  plugins: [],
}
