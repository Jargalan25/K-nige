import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => <h1 style={{ color: "red" }} {...props} />,
};

export default function MDXWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
