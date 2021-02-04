import { ApolloProvider } from "@apollo/client";
import client from "../GraphQl/config";

import "../styles/globals.css";
import "../styles/linear_icons.css";

import Layout from "../components/DS/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
