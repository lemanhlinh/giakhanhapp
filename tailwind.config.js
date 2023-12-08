/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    extract: {
      md: (content) => {
        return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g)
      }
    },
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      'xl': '1200px',
      '2xl': '1200px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

