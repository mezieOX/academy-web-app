import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9E5CF2",
        gray: {
          DEFAULT: "#08080880",
          light: "#FAFAFA",
          lighter: "#3E3232BF",
          medium: "#FAFAFA",
          bold: "#F5F2FA",
          bolder: "#F5F5F5",
        },
        red: {
          DEFAULT: "#FF3C31",
          light: "#FFF5F5",
        },
        green: {
          DEFAULT: "#009E68",
          light: "#EBFAF5",
        },
        blue: {
          DEFAULT: "#5A69F2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
