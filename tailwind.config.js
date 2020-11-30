module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
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
        inherit: ['inherit', 'inherit'],
      },
      inset: {
        24: '6rem',
        32: '8rem',
      },
      height: {
        112: '28rem',
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
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
