// pages/_app.js
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme"; // Custom dark theme
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Contrario | AI for Talent Screening</title>
        <meta
          name="description"
          content="Contrario.ai - AI-powered tool for talent screening and mock interviews."
        />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
