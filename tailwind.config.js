const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "25px",
        md: "50px",
        lg: "80px",
        xl: "160px",
        "2xl": "200px",
      },
    },
  },
  plugins: [],
};
