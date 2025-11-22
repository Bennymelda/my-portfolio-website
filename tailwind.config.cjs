/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '360px',
      },
      
animation: {
  dance: 'dance 2s ease-in-out infinite',
},

    },
  },
  plugins: [],
};
