/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'deep-background':'#12141a',
        'complement-color': '#db9864',
        'root-txt-color': '#8A92AD',
        'vibrant-txt-color': '#CED6F3',
        'dim-root-txt-color': '#63697c'
      },
      fontFamily: {
        'inter': ['Inter', 'Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'clash': ['Clash Display', 'Manrope', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif']
      },
      screens: {
        'phone': '500px',
        'tiny': '360px'
      },
      backgroundImage: {
        'binary': "url('/src/assets/images/binary-img.svg')",
        'defaultbg': "url('/src/assets/images/defaultbg.png')"
      }
    },
  },
  plugins: [],
}