import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID as string}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL as string}
    >
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </MoralisProvider>
  );
}

export default MyApp;
