/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#555555",
        borderLuxury: "#E5E5E5",
        subtle: "#F7F7F7",
      },

      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.15em",
      },

      maxWidth: {
        luxury: "1400px"
      }
    },
  },
  plugins: [],
}

