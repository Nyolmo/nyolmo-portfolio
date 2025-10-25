/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(251, 191, 36, 0.4)" },
          "50%": { boxShadow: "0 0 25px rgba(251, 191, 36, 0.7)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
