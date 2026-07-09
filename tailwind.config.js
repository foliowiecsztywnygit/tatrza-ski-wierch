/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg-page)',
          card: 'var(--bg-card)',
        },
        brand: {
          brown: 'var(--color-brand-brown)',
          'brown-dark': 'var(--color-brand-brown-dark)',
        },
        accent: {
          yellow: 'var(--color-accent-yellow)',
        },
        foreground: {
          heading: 'var(--text-heading)',
          body: 'var(--text-body)',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
        ui: ['"Montserrat"', 'sans-serif'],
        hane: ['"Hane"', '"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'pill': 'var(--border-radius-pill)',
      },
      transitionTimingFunction: {
        'app': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.03)',
      }
    },
  },
  plugins: [],
};
