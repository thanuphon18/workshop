import React from "react";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "../styles/vars.css";
import "../styles/global.css";
import theme from "../themeConfig";
import Head from "next/head";

dayjs.extend(buddhistEra);

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {getLayout(
        <ConfigProvider theme={theme}>
          <Head>
            <title>LIMS</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />

            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+Thai+Looped:wght@100;400&family=Poppins&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </ConfigProvider>
      )}
    </>
  );
}
