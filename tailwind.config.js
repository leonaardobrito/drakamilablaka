/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'morgenlicht': ['Morgenlicht', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-black': ['Montserrat-black', 'sans-serif'],
        'montserrat-bold': ['Montserrat-bold', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(2,2)' },
          // '50%': { transform: 'scale(1,1)' },
        }
      }},
  },
  plugins: [],
}

