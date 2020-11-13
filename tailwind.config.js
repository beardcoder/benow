module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      opacity: {
        5: '0.05',
        10: '0.1',
      },
      colors: {
        background: '#121212',
        baseWhite: 'rgba(255, 255, 255, 0.85)',
        primary: '#f9004d',
      },
      transitionProperty: {
        width: 'width',
        color: 'color',
        background: 'background',
      },
      spacing: {
        sm: '3px',
      },
      fontSize: {
        '7xl': '5rem',
      },
      inset: {
        24: '6rem',
        32: '8rem',
      },
      height: {
        112: '28rem',
      },
    },
    container: {
      center: true,
    },
    typography: (theme) => ({
      default: {
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
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
