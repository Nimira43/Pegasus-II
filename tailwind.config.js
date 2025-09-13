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
        'main-dark': '043aa5',
        'main-light': '#5489f5',
        'support': '#ff4500',
        'dark': '#111',
        'light': '#fafdff',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-extra': '#eee',
      },
    },
  },
  plugins: [],
}

