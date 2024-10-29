"use client";
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider as ThemeProviderMui } from "@mui/material";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
function ThemeProvider({ children }) {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#4A90E2",
      },
      secondary: {
        main: "#7ED321",
      },
    },
    typography: {
      fontFamily: font.style.fontFamily,
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProviderMui theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMui>
  );
}

export default ThemeProvider;
