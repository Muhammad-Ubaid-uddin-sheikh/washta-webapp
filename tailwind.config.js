module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_bf": "#000000bf",
          "900_07": "#00000007",
          "900_26": "#00000026",
        },
        indigo: { 300: "#747eef" },
        white: { A700_bf: "#ffffffbf", A700: "#ffffff" },
      },
      boxShadow: { xs: "0px 5.13px 10px 0px #0000003f" },
      fontFamily: { generalsans: "General Sans", manrope: "Manrope" },
      opacity: { 0.7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
