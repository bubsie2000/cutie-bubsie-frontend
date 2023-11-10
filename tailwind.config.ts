import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik, sans-serif'],
        dynapuff: ['Dynapuff, sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f472b6',

          secondary: '#3b82f6',

          accent: '#fde047',

          neutral: '#374151',

          'base-100': '#ffffff',

          info: '#38bdf8',

          success: '#2dd4bf',

          warning: '#fb923c',

          error: '#fb7185',
        },
      },
      'light',
      'dark',
      'cupcake',
    ],
  },
};
export default config;
