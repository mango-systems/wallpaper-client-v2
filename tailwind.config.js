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
        AdwBackground: '#ffffff',
        AdwTextPrimary: 'black',
        AdwBackgroundPrimaryDark: '#0b0b11',
        AdwBackgroundSidebarDark: '#242424',
        AdwBorderDark: '#28292e',
        AdwBackgroundDark: '#0b0b11',
        AdwTextPrimaryDark: '#b8b8b9'
      },
      borderRadius: {
        'AdwWindow': '8px'
      },
      height: {
        'AdwTopBar' : '40px'
      }
    },
  },
  plugins: [],
}

