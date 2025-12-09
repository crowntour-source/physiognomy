/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        korean: {
          red: '#C8102E',
          blue: '#003478',
          gold: '#D4AF37',
          beige: '#F5F1E8',
        },
      },
    },
  },
  plugins: [],
}
