/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Poppins', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00f7ff',
        'neon-teal': '#00d9c0',
        'neon-purple': '#d94bff',
        'electric-purple': '#c42eff',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px rgba(0, 247, 255, 0.5), 0 0 10px rgba(0, 247, 255, 0.3), 0 0 15px rgba(0, 247, 255, 0.2)',
        'neon-purple': '0 0 5px rgba(217, 75, 255, 0.5), 0 0 10px rgba(217, 75, 255, 0.3), 0 0 15px rgba(217, 75, 255, 0.2)',
        'neon-teal': '0 0 5px rgba(0, 217, 192, 0.5), 0 0 10px rgba(0, 217, 192, 0.3), 0 0 15px rgba(0, 217, 192, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};