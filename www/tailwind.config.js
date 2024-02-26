import tailwindcssanimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Discrete Rainbow Scheme (23 colors)
        // Designed by Paul Tol
        // https://personal.sron.nl/~pault/
        "light_purple_1": "#e8ecfb",
        "light_purple_2": "#d9cce3",
        "purple_4": "#caaccb",
        "purple_5": "#ba8db4",
        "purple_7": "#aa6f9e",
        "dark_purple_8": "#994f88",
        "dark_purple_9": "#882e72",
        "dark_blue_10": "#1956b0",
        "blue_11": "#437dbf",
        "blue_13": "#6195cf",
        "light_blue_14": "#7bafde",
        "dark_green_15": "#4eb265",
        "green_16": "#90c987",
        "light_green_17": "#cae0ab",
        "yellow_18": "#f7f056",
        "light_orange_19": "#f7cb45",
        "orange_23": "#ee8026",
        "dark_orange_25": "#e65518",
        "red_26": "#dc050c",
        "red_27": "#a5170e",
        "dark_red_28": "#72190e",
        "dark_red_29": "#42150a",
        "gray": "#777777",
        // VSCode editor colors
        "onyx": "#383a49",
        "onyx_2": "#3a3d41",
        "onyx_3": "#383b3d",
        "onyx_4": "#404040",
        "onyx_5": "#454545",
        "dim_gray": "#6b6b6b",
        "dim_gray_2": "#707070",
        "black": "#000000",
        "eerie_black": "#1e1e1e",
        "raisin_black": "#252525",
        "jet": "#303030",
        "timberwolf": "#d4d4d4",
        "silver": "#a6a6a6",
        "silver_2": "#bbbbbb",
        "silver_3": "#cccccc",
        "white": "#ffffff"
      },
    },
    plugins: [tailwindcssanimate],
  }
}







