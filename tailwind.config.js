module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_b2: "#ffffffb2" },
        gray: { 100: "#f1f2f7", "900_7f": "#0824317f", "100_01": "#f5f7f9" },
        indigo: { 200: "#a6abc8", 400: "#5a67ba", "300_19": "#707fdd19" },
        blue_gray: { 100: "#c7cad8", 900: "#1f384c", "900_01": "#273240" },
        black: { 900: "#000000" },
        deep_purple: { A200: "#a855f7" },
        green: { 500: "#4caf4f" },
        red: { 500: "#ef4444" },
        deep_orange: { 50: "#fee2e2" },
      },
      boxShadow: {},
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
