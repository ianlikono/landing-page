import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import Document, { Head, Main, NextScript } from "next/document";
import postcss from 'postcss';
import PropTypes from "prop-types";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import flush from "styled-jsx/server";

const prefixer = postcss([autoprefixer]);
const minifier = postcss([cssnano]);

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let pageContext;
    const page = ctx.renderPage(Component => {
      const WrappedComponent = props => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      WrappedComponent.propTypes = {
        pageContext: PropTypes.object.isRequired
      };

      return WrappedComponent;
    });

    let css;
    if (pageContext) {
      css = pageContext.sheetsRegistry.toString();
      if (process.env.NODE_ENV === 'production') {
        const result1 = await prefixer.process(css);
        css = result1.css;
        const result2 = await minifier.process(css);
        css = result2.css;
      }
    }
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...page,
        pageContext,
        styles: (
          <React.Fragment>
            <style
              id="jss-server-side"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
            {flush() || null}
          </React.Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={
              pageContext ? pageContext.theme.palette.primary.main : null
            }
          />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@agoraexpo" />
          <meta name="twitter:title" content="AgoraExpo" />
          <meta
            name="twitter:description"
            content="get the power of all the big players in your online business. Start for free with no initial investment required😀.."
          />
          <meta name="twitter:image" content="https://res.cloudinary.com/doelo01na/image/upload/v1556859500/static/logos/agoraexpobanner.png" />
          {/* Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="AgoraExpo" />
          <meta
            property="og:description"
            content="get the power of all the big players in your online business. Start for free with no initial investment required😀.."
          />
          <meta property="og:image" content="https://res.cloudinary.com/doelo01na/image/upload/v1556859500/static/logos/agoraexpobanner.png" />
          <meta property="og:locale" content="en_US" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="canonical" href="https://agoraexpo.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
