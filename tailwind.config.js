/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "extended-yellow": "#D99904",
        "extended-gold": "#d1a054b3",
      },
      backgroundImage: {
        "featured-item":
          "linear-gradient(to right bottom,rgba(21, 21, 21, 0.70), rgba(21, 21, 21, 0.70)), url('/src/assets/home/featured.jpg')",
        "login-bg": "url('/src/assets/others/authentication.png')",
      },
    },
  },
  daisyui: {
    themes: ["wireframe"],
  },
  plugins: [require("daisyui")],
};
