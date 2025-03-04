/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
  ],
  safelist: [
    'bg-cat-negro',
    'bg-cat-blanco',
    'bg-cat-gris',
    'bg-cat-naranja',
    'bg-cat-jaspeado',
    'bg-cat-siames',
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'cat': {
          negro: '#2E2E2E',
          blanco: '#FAFAFA',
          gris: '#B0BEC5',
          naranja: '#F4A261',
          jaspeado: '#D4A373',
          siames: '#8D6E63',
        },
        'custom-bg': '#F8F3ED', 
        'custom-dark': '#4A4A4A', 
        'custom-accent': '#F4A261', 
        'custom-card': '#FFF6E5', 
      },
    },
    boxShadow: {
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'header': '0 10px 5px 0 rgba(0, 0, 0, 0.2)',
      'footer': '0 -5px 5px 0 rgba(0, 0, 0, 0.2)',
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        catTheme: {
          "primary": "#8D6E63", 
          "secondary": "#4A4A4A", 
          "accent": "#F4A261", 
          "neutral": "#FFF6E5", 
          "base-100": "#F8F3ED", 
          "info": "#B0BEC5", 
          "success": "#4CAF50", 
          "warning": "#FFB74D", 
          "error": "#D32F2F", 
        }
      },
    ],
  },
}
