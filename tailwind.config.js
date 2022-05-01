module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },

    colors: {
      'dark': '#051A37',
      'mid': '#8194A5',
      'light': '#DDE3E8',
      'shade': '#F8F9FA',
      'white': '#FFFFFF'
    },

    fontFamily: {
      'body': ['Lato', 'sans-serif']
    },

    container: {
      center: true,
      
      screens: {
        sm: '100%',
        md: '728px',
        lg: '984px',
        xl: '1170px',
        '2xl': '1170px',
      },
    },
    
    extend: {
      fontSize: {
        '2xs': '0.625rem'
      },
      minHeight: {
        '60': '15rem'
      }
    }
  },
  plugins: [],
}
 