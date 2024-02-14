// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Preload your images here */}
          <link rel="preload" href="/images/ybagmedia.jpg" as="image" />
          <link rel="preload" href="/images/seregy2.jpg" as="image" />
          <link rel="preload" href="/images/narrowone.jpg" as="image" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;