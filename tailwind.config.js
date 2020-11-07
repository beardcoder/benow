module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
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
      height: {
        112: '28rem',
      },
    },
    container: {
      center: true,
    },
    typography: {
      default: {
        css: {
          color: 'rgba(0, 0, 0, 0.85)',
          a: {
            color: '#f9004d',
            '&:hover': {
              color: '#f9004d',
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
