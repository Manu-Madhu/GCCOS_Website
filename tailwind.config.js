/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-4':'#0d2620',
        'green-3':'#445855',
        'green-2':'#07837a',
        'green-1':'#d8ead8',
        'white' : '#ffffff',
        'black' : '#000000',
      }
    },
  },
  plugins: [],
}

