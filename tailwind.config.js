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

          secondary: "#00B3B3",   // Muted green, for productivity and reliability

          accent: "#a0e3d4",      // Soft teal, to enhance the blue-green theme
      
          neutral: "#73C5DD",     // Light blue, for a calm and secure background
      
          "base-100": "#f0fcfc",  // Very light blue-green, for a clean base color
      
          info: "#64d1e6",        // Bright blue for informational elements
      
          success: "#88f0b0",     // Pastel green for positive feedback
      
          warning: "#ffdf6b",     // Yellow for warnings, keeping contrast with other colors
      
          error: "#f77d75", 
        },
      },
    ],
  },
};
