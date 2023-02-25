module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#f8fcdb',
        accent: '#23c2b2',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.png')",
        about: "url('./assets/avatar.png')",
      },
    },
  },
  plugins: [],
};
