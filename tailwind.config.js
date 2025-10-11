/** @type {import('tailwindcss/types').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // screens: {
    //   xxs: "375px",
    //   xs: "425px",
    // },
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      textColor: {
        "gray-500": "#6c757d",
      },
      fontWeight: {
        bold: "700",
      },
      colors: {
        primary: "#FFFFFFFF",
        secondary: "#212127",
        action: "#51FF76FF",
        image: "#3B3C41",
        txt: "#000000",
        tersier: "#0c0d10",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    // variants: {
    //   extend: {
    //   }
    // }
  },
  plugins: [],
};
