module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: 'rgb(29, 155, 240)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(20px)',
      },
    },
  },
  plugins: [],
}
