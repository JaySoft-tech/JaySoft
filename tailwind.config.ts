export default {
  content: ['./app/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B090',
          hover: '#009678',
        },
        black: '#000000',
        gray: {
          dark: '#535353',
          light: '#777777',
        },
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
