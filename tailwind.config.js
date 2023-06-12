/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#0e0d0d",
          "base-200": "#201e1e",
        },
      },
      "business",
    ],
  },
  plugins: [require("daisyui")],
};
