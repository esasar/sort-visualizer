/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      fontWeight: {
        medium: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}