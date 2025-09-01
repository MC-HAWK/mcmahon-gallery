/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': {'min': '1024px', 'max': '1366px'},
      },
    },
  },
  plugins: [],
} 