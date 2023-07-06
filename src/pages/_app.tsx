import { wrapper } from "@/state/store";
import MainLayout from "@/layout/MainLayout";
import "@/styles/index.css";
import theme from "@/themes/theme";
import { ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";
import { compose } from "@reduxjs/toolkit";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default compose(wrapper.withRedux)(App)
