/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Baloo 2'", 'cursive'],
        body: ["Fredoka", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

