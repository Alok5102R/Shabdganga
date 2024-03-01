module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","*.js"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens, such as phones (default)
        'md': '768px',   // Medium screens, such as tablets
        'lg': '1024px',  // Large screens, such as desktops
        'xl': '1280px',  // Extra large screens, such as large desktops
      },
    },
  },
  plugins: [],
};
