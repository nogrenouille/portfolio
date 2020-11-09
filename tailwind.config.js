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
    },
    minWidth: theme => ({
      ...theme("spacing")
    }),
    inset: theme => ({
      ...theme("spacing"),
      full: "100%",
      "1/2": "50%"
    })
  },
  variants: {
    visibility: ["responsive", "group-hover"]
  },
  plugins: []
};
