/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brand: '#00013A',
        boneWhite: 'rgb(249, 246, 238)'
      }
    },
  },
  plugins: [],
}

