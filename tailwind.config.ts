/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}', './docs/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Docusaurus 기본 색상과 일치하는 색상들
        docusaurus: {
          primary: '#3b82f6',
          'primary-dark': '#2563eb',
          'primary-darker': '#1d4ed8',
          'primary-darkest': '#1e40af',
          'primary-light': '#60a5fa',
          'primary-lighter': '#93c5fd',
          'primary-lightest': '#dbeafe',
        },
      },
      fontFamily: {
        pretendard: [
          'Pretendard Variable',
          'Pretendard',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'grid-move': 'grid-move 20s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
        'beam-sweep': 'beam-sweep 2s ease-in-out infinite',
        'beam-sweep-horizontal':
          'beam-sweep-horizontal 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'grid-move': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(50px, 50px)',
          },
        },
        'rotate-slow': {
          from: {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          to: {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)',
            opacity: '0.7',
          },
          '33%': {
            transform: 'translateY(-20px) scale(1.1)',
            opacity: '0.9',
          },
          '66%': {
            transform: 'translateY(10px) scale(0.9)',
            opacity: '0.8',
          },
        },
        twinkle: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.5)',
          },
        },
        'beam-sweep': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(-50%) scaleY(0)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'translateX(-50%) scaleY(1)',
          },
        },
        'beam-sweep-horizontal': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(-50%) scaleX(0)',
          },
          '50%': {
            opacity: '0.6',
            transform: 'translateY(-50%) scaleX(1)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        'gradient-primary-light':
          'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
        'gradient-text': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ['container'],
};
