/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        yesteryear:['Yesteryear','sans-serif ']
      }, 
      colors:{
        'primary_button' : '#DF6951'
      }
    },
  },
  plugins: [],
}

