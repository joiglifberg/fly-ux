module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f3f7ff",
          100: "#e8efff",
          200: "#c5d6ff",
          300: "#a2beff",
          400: "#5c8dfe",
          500: "#165cfe",
          600: "#1453e5",
          700: "#1145bf",
          800: "#0d3798",
          900: "#0b2d7c"
        },
        gray: {
          50: "#fefefe",
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f8f8f8",
          400: "#f3f3f3",
          500: "#eeeeee",
          600: "#d6d6d6",
          700: "#b3b3b3",
          800: "#8f8f8f",
          900: "#757575"
        },
        "light-blue": "rgba(22, 92, 254, 0.1)"
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"]
      },
      fontSize: {
        "3xl": "2rem",
        "5xl": "3.125rem"
      },
      spacing: {
        4.5: "1.125rem",
        22: "5.5rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
