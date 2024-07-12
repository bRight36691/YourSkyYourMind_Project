import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        ibmPlex: ["var(--ibm-plex-sans-thai-looped-font)", "sans-serif"],
      },
      colors: {
        whiteBox: "#F8F8F7",
        textLink: "#1958FF",
        grayBlue: "#475569",
        redError: "#DC2626",
        placeholder: "#94A3B8",
        choiceText: "#1E293B",
        grayBg: "#E6E6E6",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
