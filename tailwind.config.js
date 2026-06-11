/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8ECF1',
          100: '#D1D9E3',
          200: '#A3B3C7',
          300: '#758DAB',
          400: '#47678F',
          500: '#194173',
          600: '#143A5C',
          700: '#0F2D45',
          800: '#0B1F3A',
          900: '#061228',
        },
        gold: {
          DEFAULT: '#C8A14A',
          50: '#FAF7EE',
          100: '#F5EFD8',
          200: '#EBDEB1',
          300: '#E1CD8A',
          400: '#D7BC63',
          500: '#C8A14A',
          600: '#A8843D',
          700: '#886730',
          800: '#684A23',
          900: '#482D16',
        },
      },
    },
  },
  plugins: [],
}