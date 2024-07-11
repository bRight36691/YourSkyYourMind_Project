import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        ibmPlex: ["var(--ibm-plex-sans-thai-looped-font)", "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui'),],
} satisfies Config;
