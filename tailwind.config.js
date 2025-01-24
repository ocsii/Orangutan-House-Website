
module.exports = {
  corePlugins: {
    preflight: true, // Ensure this is true
  },
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },

        colors: {
          primary: "#F93827", // dark orange
          secondary: "#FF9D23", // light orange
          accent: "#FFD65A", // yellow-ish
          background: "#F5F5F5", // light grey
          text: "#33372C", // defualt: 1F2937 // mine is dark black
        },
      },
    },
    plugins: [],
  }
