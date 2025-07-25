/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "color-primary" : "#81051e",
        "color-primary-light" : "#020726",
        "color-primary-dark" : "#010417",
        "color-secondary" : "#ff7d3b",
        "color-gray" : "#333",
        "color-white" : "fff",
        "color-blob" : "#A427DF",
      }
    },
    container: {
      center : true,
      padding: {
        DEFAULT: '20px',
        md:"50px"  
      }
    }
  },
  plugins: [],
}

