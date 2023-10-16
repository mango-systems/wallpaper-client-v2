/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'sm': '330px',
      'md': '570px',
    },
    extend: {
      colors: {
        AdwBackgroundPrimary: '#ffffff',
        AdwBackgroundSidebar: '#fafafa',
        AdwBorder: '#e4e4e4',
        AdwBackground: '#ffffff'
      },
      borderRadius: {
        'AdwWindow': '8px'
      }
    },
  },
  plugins: [],
}

