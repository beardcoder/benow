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
        primary: '#24c6dc',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'rgba(0, 0, 0, 0.85)',
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary'),
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
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
