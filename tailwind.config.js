/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        apollo: {
          orange: '#EC8B17',
          darkOrange: '#D67A0D',
          navy: '#1a1a2e',
          glass: {
            light: 'rgba(255, 255, 255, 0.1)',
            lighter: 'rgba(255, 255, 255, 0.05)',
            dark: 'rgba(0, 0, 0, 0.1)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

