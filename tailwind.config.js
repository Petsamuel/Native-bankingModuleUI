/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
theme: {
    extend: {
      colors: {
        // Brand tokens
        primary: '#009FDF', // Vibrant Blue
        bermuda: '#7ECED5', // Bermuda light blue
        'brand-black': '#000000', // Black
      },
    },
  },
  plugins: [],
}

