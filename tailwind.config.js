/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FEFDF9',
        'purple-primary': '#AA9EF9',
        'gray' : '#E6E4E0',
      },
      fontFamily: {
        ralewayBlack: ['Raleway-Black'],
        ralewayBold: ['Raleway-Bold'],
        ralewayExtraBold: ['Raleway-ExtraBold'],
        ralewayExtraLight: ['Raleway-ExtraLight'],
        ralewayLight: ['Raleway-Light'],
        ralewayMedium: ['Raleway-Medium'],
        ralewayRegular: ['Raleway-Regular'],
        ralewaySemiBold: ['Raleway-SemiBold'],
        ralewayThin: ['Raleway-Thin'],
        montserratBlack: ['Montserrat-Black'],
        montserratBold: ['Montserrat-Bold'],
        montserratExtraBold: ['Montserrat-ExtraBold'],
        montserratExtraLight: ['Montserrat-ExtraLight'],
        montserratLight: ['Montserrat-Light'],
        montserratMedium: ['Montserrat-Medium'],
        montserratRegular: ['Montserrat-Regular'],
        montserratSemiBold: ['Montserrat-SemiBold'],
        montserratThin: ['Montserrat-Thin'],
      }
    },
  },
  plugins: [],
}

