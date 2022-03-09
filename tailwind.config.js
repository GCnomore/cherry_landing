module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "300px",
        sm: "50px",
        md: "100px",
        lg: "150px",
        xl: "250px",
        "2xl": "300px",
      },
    },
  },
  plugins: [],
};
