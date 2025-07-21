/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        typing: "typing 4s steps(40, end) forwards",
        blink: "blink 0.7s step-end infinite",
        fade: "fade 1.2s ease-in-out forwards",
        bounceX: "bounceX 2s infinite ease-in-out",
        scaleIn: "scaleIn 0.5s ease-out forwards",
        fadeInDelay1: "fadeInDelay1 0.8s ease-in-out forwards",
        fadeInDelay2: "fadeInDelay2 1.2s ease-in-out forwards",
        fadeInDelay3: "fadeInDelay3 1.6s ease-in-out forwards",
        fadeInDelay4: "fadeInDelay4 2s ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        scaleIn: {
          from: { transform: "scale(0.9)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        fadeInDelay1: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInDelay2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInDelay3: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInDelay4: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
