/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #1B6F22 19.8%, #30C43C 47.38%, #28A432 73.15%)',
        'custom-gradient-one': 'linear-gradient(180deg, #000000 0%, #B398EF 100%)',
      },
    },
  },
  plugins: [],
};
