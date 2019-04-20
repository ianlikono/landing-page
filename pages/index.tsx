import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { initGA, logPageView } from "../utils/analytics";

const IndexPage: React.FunctionComponent = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return <Layout />;
};

export default IndexPage;
