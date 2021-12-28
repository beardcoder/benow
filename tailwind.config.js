const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      header: ['Work Sans', ...defaultTheme.fontFamily.sans],
    },
    linearBorderGradients: (theme) => ({
      colors: {
        primary: [theme('colors.blue.500'), theme('colors.teal.400')],
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
        baseWhite: 'rgba(255, 255, 255, 0.85)',
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
        },
        teal: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#3ABAB4',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'rgba(0, 0, 0, 0.85)',
            a: {
              color: theme('colors.blue.400'),
              transition: 'color 200ms',
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.teal.500'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.baseWhite'),

            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            h5: {
              color: theme('colors.white'),
            },
            h6: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            figcaption: {
              color: theme('colors.white'),
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
