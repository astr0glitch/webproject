/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#6C5CE7',
        'primary-light': '#8A7EEF',
        'primary-dark': '#4B3CD6',
        'secondary': '#00D2D3',
        'secondary-light': '#33E3E3',
        'secondary-dark': '#00A9AA',
        'accent': '#FF6B6B',
        'accent-light': '#FF9494',
        'accent-dark': '#F03E3E',
        'highlight': '#FFD93D',
        'highlight-light': '#FFEBA0',
        'highlight-dark': '#FECA00',
        'success': '#2ECC71',
        'warning': '#F39C12',
        'error': '#E74C3C',
        'space-dark': '#0F0F23',
        'space-light': '#1E1E3F',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'orbitron': ['Orbitron', 'ui-sans-serif', 'system-ui'],
        'space-mono': ['Space Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'nebula-gradient': 'linear-gradient(45deg, rgba(108, 92, 231, 0.15), rgba(0, 210, 211, 0.15))',
      },
    },
  },
  plugins: [],
};