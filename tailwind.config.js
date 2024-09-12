/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation:{
        'delay-spin': 'spin 10s linear infinite',
      },
      fontFamily:{
        'poppins':["'Poppins' ,'sans-serif'"],
        'Gallient':["'Gallient' , 'sans-serif'"],
      },

    },
  },
  plugins: [],
}

