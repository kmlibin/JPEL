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
        customDarkGreen: "#31402A",
        customWhite: "#F2F2F2",
        customLightGreen: "#B5CCAA",
        customBeige: "#D9C2AD",
        customBrown: "#A67E6F",
        customMediumGreen:"#475E41"
      },
    },
  },
  plugins: [],
};
export default config;
