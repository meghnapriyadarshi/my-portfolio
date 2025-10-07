/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1920px", // your container width
      },
    },
    extend: {
      fontFamily:{
        heading: ["Poppins", "sans-serif"],
        body:["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#facc15", // dark yellow
        secondary: "#111827",
        text: "#FFFFFF",    // white
      },
       fontSize: {
        h1: ["42px", { lineHeight: "1.2" }],
        h2: ["38px", { lineHeight: "1.25" }],
        h3: ["34px", { lineHeight: "1.3" }],
        h4: ["30px", { lineHeight: "1.3" }],
        h5: ["26px", { lineHeight: "1.35" }],
        h6: ["22px", { lineHeight: "1.4" }],
        p: ["18px", { lineHeight: "1.6" }],
        button: ["16px", { lineHeight: "1.6" }],
      },
      screens: {
        "3xl": "1920px",
        "2xl": "1450px",
        "xl": "1300px",
        "lg": "1024px",
        "md": "989px",
        "sm": "767px",
        "xs": "479px",
      },
    },
  },
  plugins: [],
}

