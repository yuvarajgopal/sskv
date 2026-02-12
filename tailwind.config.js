/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f1ee',
          100: '#e4ddd6',
          200: '#c7bcaf',
          300: '#a69787',
          400: '#827162',
          500: '#655546',
          600: '#4d4036',
          700: '#382e27',
          800: '#261f19',
          900: '#181210',
        },
        accent: {
          50: '#fef5ed',
          100: '#fce6d0',
          200: '#f8c9a0',
          300: '#f2a56b',
          400: '#e07830',
          500: '#bf5700',
          600: '#9e4800',
          700: '#7c3800',
          800: '#5b2900',
          900: '#3d1c00',
        },
        neutral: {
          50: '#faf9f8',
          100: '#f3f1ef',
          200: '#e8e4e0',
          300: '#d9d4ce',
          400: '#c5beb6',
          500: '#a39b91',
          600: '#7d756c',
          700: '#524b44',
          800: '#36322e',
          900: '#211f1c',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
