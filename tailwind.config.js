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
      angelina: ["Angelina", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#001d3d",
        yello: "#ffc300",
        cream: "#f9d599",
      },
    },
  },
  plugins: [],
};
