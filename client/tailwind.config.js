module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jura: ['Jura', 'sans-serif'],
      },
      colors: {
        main: '#e15799',
        border: '#222F44',
        light: {
          background: '#ffffff',
          'primary-text': '#212732',
          'secondary-text': '#1A202C',
        },
        dark: {
          background: '#0e182a',
          'primary-text': '#FFFFFF',
          'secondary-text': '#F7FAFC',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
