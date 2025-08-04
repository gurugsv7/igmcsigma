/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'loading-bar': 'loading-bar 3s linear 1',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shooting-star': 'shooting-star 8s linear infinite',
        'ekg': 'ekg 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float-vertical': 'float-vertical 4s ease-in-out infinite',
        'particle-flow': 'particle-flow 8s linear infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
        'ring-spin': 'ring-spin 8s linear infinite',
        'neuron-activate': 'neuron-activate 2s ease-in-out infinite',
        'gateway-pulse': 'gateway-pulse 4s ease-in-out infinite'
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(-200px) translateY(200px)' },
        },
        'ekg': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'float-vertical': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'particle-flow': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(0)', opacity: '0' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'ring-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'neuron-activate': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },
        'gateway-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px 2px rgba(34, 211, 238, 0.2)' },
          '50%': { boxShadow: '0 0 40px 4px rgba(34, 211, 238, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
