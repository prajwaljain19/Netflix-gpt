/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      boxShadow: {
        inner: 'inset 5px 10px 20px 5px rgba(0, 0, 0, 0.06)',
      },
    },
    plugins: [],
  }