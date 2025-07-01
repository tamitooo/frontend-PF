module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        amarillo1: '#FFD931',
        amarillo2: '#FCF7D5',
        amarillo3: '#FFF0AD',
        amarillo4: '#FDF7DD',
        gris:'#F2F2F2',
      },
      fontFamily: {
        silkscreen: ['Silkscreen', 'sans-serif'],
        Judson: ['Judson', 'serif'], 
        suranna: ['Suranna', 'serif'],
      

      },
    },
  },
  plugins: [],

}