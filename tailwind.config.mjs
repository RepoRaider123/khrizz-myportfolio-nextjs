/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode using class-based toggle
  darkMode: ["class"],

  // Define the files where Tailwind should look for classes to generate styles
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  // Include all files in the 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Include all files in the 'components' directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Include all files in the 'app' directory
  ],

  // Define the theme configuration for custom styles
  theme: {
    // Configure container to be centered and add padding
    container: {
      center: true,  // Center the container
      padding: "15px",  // Add 15px padding around the container
    },

    // Define the screen breakpoints (responsive design)
    screens: {
      sm: "640px",  // Small screens (mobile devices)
      md: "768px",  // Medium screens (tablets)
      lg: "960px",  // Large screens (small desktops)
      xl: "1200px",  // Extra-large screens (larger desktops)
    },

    // Set the default font for the project
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",  // Use the JetBrains Mono font defined in your global CSS
    },

    // Extend the default theme with custom values
    extend: {
      // Define custom colors for your project
      colors: {
        primary: "#1c1c22",  // Dark primary color for the background
        accent: {
          DEFAULT: "#00ff99",  // Main accent color
          hover: "#00e187",  // Accent color when hovered
        },
        background: 'var(--background)',  // Use CSS variable for background color
        foreground: 'var(--foreground)',  // Use CSS variable for foreground color
      },

      // Customize border radius sizes using CSS variables
      borderRadius: {
        lg: 'var(--radius)',  // Large border radius
        md: 'calc(var(--radius) - 2px)',  // Medium border radius (slightly smaller than lg)
        sm: 'calc(var(--radius) - 4px)',  // Small border radius (smaller than md)
      }
    }
  },

  // Use the Tailwind CSS animate plugin for adding animation utilities
  plugins: [require("tailwindcss-animate")],
};
