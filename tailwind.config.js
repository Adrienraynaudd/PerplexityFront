import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'offsetDark': '#292927',
      'borderMainDark': '#3b3b3b',
      'backgroundDark': '#1f1f1d',
      'textMainDark': '#e8e8e6',
      'offsetPlusDark': '#333331',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      neutral: colors.neutral,

    },
    extend: {},
  },
  plugins: [],
}

