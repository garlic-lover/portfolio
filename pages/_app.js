import "../styles/globals.css";
import "../styles/linear_icons.css";

import Layout from "../components/DS/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
