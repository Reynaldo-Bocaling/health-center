/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  server: {
    fs: {
      allow: [
        // "C:/Users/acer/Documents/GitHub/freelance/health-center",yy
        "C:/Users/acer/Documents/proj1/client",
      ],
    },
  },
};
