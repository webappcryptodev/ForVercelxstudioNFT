module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tag: {
          brand: "#EA2429 ",
          brandLight: "rgba(86, 111, 254, 0.15)",
          text: "#6f7d95",
          yellow: "#d7e932",
          lighter: "#f9fbfc",
          light: "#f2f1f0",
          lite: "#f3f3f3",
          hardLight: "#e6edf0",
          parag: "#a5afc1",
          dark: "#262626",
          darker: "#040404",
          red: "#eb5757",
          info: "#1384e0",
          opac: "rgba(255, 255, 255, 0.082)",
          darkOpac: "#4d4b53",
        },
        gray: {
          50: "#C4C4C4",
          100: "#8F8F8F",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        primary: {
          200: "#fff",
          300: "#E5E5E5",
          400: "#1162FF",
          500: "#35DBC7",
          600: "#879A9C",
          700: "#0288d1",
          800: "#FFC350",
          900: "#7F4556",
        },
        dark: {
          400: "#a5afc1",
          500: "#1D1D1D",
          600: "#37353b",
          700: "#201f23",
          800: "#212529",
          900: "#000",
        },
      },
      gridTemplateColumns: {
        // Simple max-content
        "max-2": "repeat(2, max-content)",
        "max-3": "repeat(3, max-content)",
        "max-4": "repeat(4, max-content)",
        "max-mi": " min-content 1fr",
        "fr-max": "1fr max-content",
        "max-fr": " max-content 1fr",
        "min-2": "repeat(2, min-content)",
        auto: "repeat( auto-fit, minmax(10vw, max-content) )",
      },

      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        none: "none",
        new: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        white: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        "new-1": "1px 0px 5px 0px rgba(255,255,255,0.75)",
        "new-2": "0 0 0 1px rgba(0, 0, 0, 0.16)",
        "new-3":
          " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "new-4": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      fontWeight: {
        bolder: 800,
        extrabold: 900,
      },
      padding: {
        6: "1.5rem",
        8: "2rem",
      },
      margin: {
        550: "500px",
      },
      width: {
        550: "550px",
      },
      height: {
        550: "550px",
      },
      screens: {
        ipad: "1269px",
        xs: "323px",
        xl: "1200px"
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms"), require("daisyui")],
};
