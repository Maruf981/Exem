/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {screens: {
      'sm': { 'max': '576px' },
      // => @media (max-width: 576px) { ... }

      'md': { 'max': '960px' },
      // => @media (max-width: 960px) { ... }

      'lg': { 'max': '1440px' },
      // => @media (max-width: 1440px) { ... }
    },
  
    backgroundImage: {
      'hero-pattern': "url('./src/images/Background (1).png')",
      'footer-texture': "url('/img/footer-texture.png')",},
  },
  plugins: [],
}
};

