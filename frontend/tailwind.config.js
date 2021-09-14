module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    opacity: {
      "0": "0",
      "20": "0.2",
      "40": "0.4",
      "60": "0.6",
      "80": "0.8",
      "100": "1",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
