/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        floatUp: {
          "0%": { top: "100%", opacity: "0" },
          "100%": { top: "0", opacity: "1" },
        },
        bounceIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
        draw: {
          "100%": {
            strokeDashoffset: 0,
          },
        },
      },
      animation: {
        floatUp: "floatUp 1.5s ease-out forwards",
        "bounce-in": "bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
