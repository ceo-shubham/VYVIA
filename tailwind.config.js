/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vyvia: {
          dark: '#121915',
          charcoal: '#1E2522',
          forest: '#1E3D30',
          sage: '#4A6B5D',
          leaf: '#2D5A47',
          mint: '#DCE8E1',
          cream: '#F9F7F2',
          ivory: '#FCFBF8',
          sand: '#EFEBE4',
          blush: '#F3E8E2',
          rose: '#DCAE9D',
          coral: '#D97757',
          gold: '#C59B27',
          acid: '#E06A3B',
          alkali: '#6366F1'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(30, 61, 48, 0.06)',
        'elevated': '0 20px 40px -10px rgba(30, 61, 48, 0.12)',
        'glow': '0 0 25px rgba(45, 90, 71, 0.25)',
      }
    },
  },
  plugins: [],
}
