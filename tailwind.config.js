// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Ensures Tailwind scans the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript and TypeScript files in the src folder
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme here
  },
  plugins: [require("rippleui")], // Add any Tailwind plugins here
};