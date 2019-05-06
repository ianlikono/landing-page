import Head from 'next/head';
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

  return (
    <>
      <Head>
        <title>agoraexpo</title>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
          h._hjSettings={hjid: 1307852,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}} />
      </Head>
      <Layout />
    </>
  );
};

export default IndexPage;
