/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        libreBaskerville: ['"Libre Baskerville"', 'serif'],
        lora: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill'),
  ],
};
