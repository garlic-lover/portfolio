import "../styles/globals.css";
import "../styles/linear_icons.css";
import "../styles/ranade.css";

import { usePleaseStay } from "react-use-please-stay";

import Layout from "../components/DS/Layout";
import { AppContextProvider } from "../state/AppContext";

function MyApp({ Component, pageProps }) {
  usePleaseStay({ titles: ["Hey it's Mat!", "Contact me"] });

  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
