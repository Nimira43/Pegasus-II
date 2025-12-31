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
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
        'grey-1': '#333',
        'grey-2': '#999',
        'grey-3': '#ccc',
        'grey-3': '#ddd',
        'grey-5': '#eee',
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

