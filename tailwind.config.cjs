/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',    // Violet principal
        secondary: '#1E1B2E',  // Fond sombre
        accent: '#C084FC',     // Violet clair
        dark: {
          DEFAULT: '#13111C',  // Fond très sombre
          lighter: '#1A1825',  // Fond légèrement plus clair
          accent: '#2D2B3D',   // Accent sombre
        },
        light: {
          DEFAULT: '#F5F3FF',  // Texte clair
          muted: '#A5B4FC',    // Texte secondaire
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
} 