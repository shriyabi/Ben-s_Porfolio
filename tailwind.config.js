/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'georgia-like': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'], //Default serif
        'bitter': ['Bitter', 'serif'],
      },
    },
  },
  plugins: [],
}

