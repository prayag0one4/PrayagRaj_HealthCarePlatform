/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path to include your file structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2', // Customize with your primary color
        secondary: '#357ABD',
      },
    },
  },
  plugins: [],
};
