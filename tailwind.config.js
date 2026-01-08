/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lineGrow: {
          // Starts at 0 width and transparent color
          '0%': { width: '0%', backgroundColor: 'transparent' },
          // Ends at 20% width with the orange-600 color (#ea580c)
          '100%': { width: '20%', backgroundColor: '#ea580c' },
        },
      },
      animation: {
        // '1.5s' is the duration, 'ease-out' makes it smooth, 'forwards' keeps the end state
        'grow-line': 'lineGrow 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}