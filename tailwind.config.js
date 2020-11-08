module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        black: {
          default: "#111111"
        },
        white: "#fefefe"
      }
    }
  },
  variants: {},
  plugins: []
};
