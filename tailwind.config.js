module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-gray": "#F2F2F2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["corporate"], // Specify the corporate theme here
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
