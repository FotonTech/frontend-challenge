import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="min-h-full">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta
            name="description"
            content="BookOpository | Find the books you want amd keep track of your reading."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/SF_PRO_BOLD.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SF_PRO_MEDIUM.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SF_PRO_REGULAR.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="min-h-screen bg-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
