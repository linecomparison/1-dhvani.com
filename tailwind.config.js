/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#eb771e",
        background: "#061d23",
        primary: "#3f976b",
        secondary: "#2e5ab2",
        accent: "#42c2c0",
      },
      fontSize: {
        sm: "0.850rem",
        base: "1.2rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: 'Lekton',
        body: 'Lekton',
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      animation: {
        typewriter: 'typewriter 2s steps(16) forwards',
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
    },
  },
  plugins: [],
};
