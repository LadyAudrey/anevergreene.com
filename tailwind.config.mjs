/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        parchment: {
          50:  '#fbf8f1',
          100: '#f5efe1',
          200: '#ebe2cd',
        },
        moss: {
          400: '#7a8f6a',
          500: '#5e7551',
          600: '#4a5d40',
          700: '#384730',
          800: '#283322',
          900: '#1a2117',
        },
        bark: {
          500: '#6b5b48',
          700: '#3e3327',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['Philosopher', 'Georgia', 'serif'],
        sans: ['Philosopher', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.32em',
      },
    },
  },
  plugins: [],
};
