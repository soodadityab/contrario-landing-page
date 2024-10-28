// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff", // white text for headings
    },
    secondary: {
      main: "#1a73e8", // blue accent color
    },
    tertiary: {
      main: "#000000", // black for a tertiary accent
    },
    background: {
      default: "#000000", // black background
      paper: "#ffffff", // white for light sections
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
