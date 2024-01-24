import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lightBorderY: "0px 2px 1px #ccc;",
        darkBorderY: "0px 2px 1px #3d3d3d;",
        lightBorderX: "2px 0px 1px #ccc;",
        darkBorderX: "2px 0px 1px #3d3d3d;",
      },
      backgroundColor: {
        lightMode: "#ffffff",
        darkMode: "#161616",
      },
    },
  },
  plugins: [],
};
export default config;
