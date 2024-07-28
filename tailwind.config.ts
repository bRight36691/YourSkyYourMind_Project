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
        grayRadio: "#CBD5E1",
        scene2: "#757985",
        grayRI9: "#ADB1BA",
        resultLine: "#4B4B4B",
        pinkResult: "#FD7192",
        blueResult: "#1983D4",
        noBurnout: "#63C670",
        mediumBurnout: "#C5C663",
        highBurnout: "#DE6D30",
        severeBurnout: "#DE3030",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
  },
} satisfies Config;
