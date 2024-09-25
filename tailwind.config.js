/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "lofi",
      "emerald",
      "nord",
      {
        customTheme: {

          secondary: "#00B3B3",   // Muted green

          accent: "#a0e3d4",      // Soft teal
      
          neutral: "#73C5DD",     // Light blue
      
          "base-100": "#f0fcfc",  // Very light blue-green
      
          info: "#64d1e6",        // Bright blue
      
          success: "#88f0b0",     // Pastel green 
      
          warning: "#ffdf6b",     // Yellow
      
          error: "#f77d75", 
        },
      },
    ],
  },
};
