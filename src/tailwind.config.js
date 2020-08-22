module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.ts"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        iconia: ["Raleway"],
      },
      screens: {
        xxl: "1400px",
      },
      spacing: {
        "72": "18rem",
        "80": "20rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
