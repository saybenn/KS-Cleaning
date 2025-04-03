import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css"; // ✅ Import Tailwind styles
import Layout from "../components/layout";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

