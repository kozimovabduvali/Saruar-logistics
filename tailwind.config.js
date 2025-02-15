/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1500px',
      '2xl': '1650px',
    },
    extend: {
      fontFamily: {
        'plus-sans': ['Plus Jakarta Sans', 'sans-serif'],
        albert: ['Albert Sans', 'sans-serif'],
      },
      colors: {
        primary: '#CC1C19',
        secondary: '#002933',
        brand: {
          gray: {
            500: '#666666',
            600: '#556275',
            700: '#303842',
          },
        }
      },
      spacing: {
        15: '0.9375rem',
        19: '1.1875rem',
        30: '1.875rem',
        50: '3.125rem',
        sixty: '3.75rem',
        70: '4.375rem',
        82: '5.125rem',
        100: '6.25rem',
        base: '93rem',
        'base-2': '109.375rem',
      }
    },
  },
  plugins: [],
}

