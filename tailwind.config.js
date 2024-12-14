/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        innoviaTheme: {
          ...require("daisyui/src/theming/themes")["black"],
          "primary": "#fff",
          "secondary": "#ef4444",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",

          ".btn-primary": {
            "color" : "#fff"
          },

          ".btn-secondary": {
            "color" : "black",
            "background-color" : "#ef4444"
          },

          ".btn-secondary:hover": {
            "color" : "#fff",
            "background-color" : "transparent",
            "border-color" : "#ef4444"
          },

          ".btn-outline.btn-primary:hover": {
            "color" : "#ef4444",
            "background-color" : "transparent",
            "border-color" : "#ef4444"
          },

        },
      },
      "dark",
      "light",
    ],
  },
};
