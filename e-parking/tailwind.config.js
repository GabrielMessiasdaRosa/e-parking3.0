module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
      /^via-/,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
