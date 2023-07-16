/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  themes: [
  "light", "dark",     {
    mytheme: {
      "primary": "#1faf5e",
      "secondary": "#f9b7ae",
      "accent": "#ffd6cc",
      "neutral": "#9ca3af",
      "base-100": "#efeff6",
      "info": "#96a3de",
      "success": "#119786",
      "warning": "#f79d18",
      "error": "#e73a27",
    },
  },],
}
