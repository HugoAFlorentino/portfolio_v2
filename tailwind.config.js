/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        pulseGlow: 'pulseGlow 1.5s infinite alternate ease-in-out',
        textGlow: 'textGlow 1.5s infinite alternate ease-in-out',
        gradientBlur: 'gradientBlur 6s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 150, 255, 0.6)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 150, 255, 1)' },
        },
        textGlow: {
          '0%': {
            textShadow:
              '0 0 4px rgba(0, 150, 255, 0.4), 0 0 8px rgba(0, 150, 255, 0.3)',
          },
          '100%': {
            textShadow:
              '0 0 8px rgba(0, 150, 255, 0.7), 0 0 16px rgba(0, 150, 255, 0.5)',
          },
        },
        gradientBlur: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      backgroundSize: {
        'gradient-lg': '400% 400%',
      },
    },
  },
  plugins: [],
};
