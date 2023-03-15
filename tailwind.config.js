/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: 'rgba(216, 0, 39, 0.9)',
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, #FF0000, #0000FF)',
      },
    },
  },
  plugins: [require('daisyui')],
};
