/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/**/*.{html,js,ts,vue}', // Important: scope to Vue files
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1E1E1E',
          tertiary: '#2A2A2A'
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#A0A0A0',
          placeholder: '#707070',
          disabled: '#505050'
        },
        accent: {
          primary: '#00B894',
          secondary: '#0984E3'
        },
        status: {
          success: '#00C853',
          error: '#D63031',
          warning: '#FDCB6E'
        },
        border: '#333333',
        input: '#2A2A2A'
      }
    }
  }
}
