/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      dancingScript: ['"Dancing Script"', "sans-serif"],
      poppins: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        main: "#001d3d",
        yello: "#ffc300",
        cream: "#ffecd1",
      },
    },
  },
  plugins: [],
};
