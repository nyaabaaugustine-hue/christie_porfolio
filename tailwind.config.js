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
        charcoal: {
          DEFAULT: '#333333',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B9B9B9',
          400: '#A2A2A2',
          500: '#8B8B8B',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}