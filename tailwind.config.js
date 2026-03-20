/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#1d5cdb',
        'main-dark': '#043aa5',
        'main-light': '#a0befa',
        'support': '#ff4500',
        'dark': '#111',
        'light': '#fafdff',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-4': '#eee',
        'grey-5': '#fafafa',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1d5cdb',
          'base-100': '#fafdff',         
          'base-content': '#111', 
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

