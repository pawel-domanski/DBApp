// pages/_app.js
import Layout from '../components/Layout';
import '../styles/globals.css'; // Zależnie od stylów globalnych

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
