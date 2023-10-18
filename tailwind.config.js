/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'sm': '330px',
      'md': '570px',
      'lg': '1170px',
      'xl': '1600px'
    },
    fontFamily: {
      'sans': '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
      'serif': 'Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
      'mono': 'font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace'
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
        'AdwTopBar': '45px',
        'PreviewHeightSmall': '560px',
        'PreviewHeightLarge': '855px'
      },
      width: {
        'PreviewWidthSmall': '380px',
        'PreviewWidthLarger': '800px',
      }
    },
  },
  plugins: [],
}

