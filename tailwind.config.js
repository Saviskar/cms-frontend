// tailwind.config.js
export const content = [
  "./index.html", // Ensures Tailwind scans the main HTML file
  "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript and TypeScript files in the src folder
];
export const theme = {
  extend: {}, // Extend Tailwind's default theme here
};
export const plugins = [require("rippleui")];
