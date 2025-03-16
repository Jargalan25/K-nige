import "../styles/global.css";
import Layout from "../component/layout";
import MDXWrapper from "../component/MDX.provider";
import { MDXProvider } from "@mdx-js/react";

// export default function App() {

//   return
// }

export default function App({ Component, pageProps }) {
  return (
    <MDXWrapper>
      <MDXProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </MDXProvider>
    </MDXWrapper>
  );
}
