const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import('tailwindcss').Theme}
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
      header: ['Urbanist', ...defaultTheme.fontFamily.sans],
    },
    linearBorderGradients: (theme) => ({
      colors: {
        primary: [theme('colors.lime.500'), theme('colors.green.400')],
      },
    }),
    extend: {
      borderWidth: {
        3: '3px',
      },
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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.sky.500'),
              transition: 'color 200ms',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.teal.400'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-border-gradients')(),
  ],
}
