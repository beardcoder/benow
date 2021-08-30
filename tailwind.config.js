const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      header: ["Work Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridAutoColumns: {
        '1/3': '33.333%',
        '1/2': '50%',
        full: '100%',
        '4/5': '80%',
      },
      minHeight: {
        240: '60rem',
      },
      rotate: {
        4: '4deg',
        '-4': '-4deg',
      },
      colors: {
        background: '#121212',
        baseWhite: 'rgba(255, 255, 255, 0.85)',
        primary: '#f9004d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
