import { extendTheme } from "native-base";

export const MAIN = extendTheme({
  colors: {
    primary: {
      700: "#3E9043",
      600: "#03AEC7",
      100: "#A7CF40",
    },
    secondary: {
      700: "#AFB1B0",
    },
    button: {
      700: "#ffad41",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Alata-Regular",
    body: "VarelaRound-Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
