import { AppProps } from "next/app";
import Head from "next/head";
import { Flex, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import SDAFooter from "../components/Footer";
import SDAHeader from "../components/Header";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Socialist Developers Association</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Flex direction="column" className="h-screen overflow-y-auto">
          <SDAHeader></SDAHeader>
          <div className="flex-1">
            <Component {...pageProps} />
          </div>

          <SDAFooter></SDAFooter>
        </Flex>
      </MantineProvider>
    </>
  );
}
