/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#a5b4fc',
          DEFAULT: '#6366f1',
          dark: '#4338ca',
        },
        accent: {
          light: '#c4b5fd',
          DEFAULT: '#a21caf',
          dark: '#701a75',
        },
        background: {
          light: '#f8fafc',
          DEFAULT: '#e0e7ff',
          dark: '#312e81',
        },
      },
      boxShadow: {
        card: '0 4px 32px rgba(80,80,200,0.08), 0 1.5px 6px rgba(80,80,200,0.04)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
};