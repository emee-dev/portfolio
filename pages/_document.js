import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Emmanuel Ajike - Solution Oriented FullStack Developer"
        />
        <meta name="image" content="https://bonhomme.lol/meta-og.png" />
        <meta itemProp="name" content="Bonhomme" />
        <meta
          itemProp="description"
          content="Emmanuel Ajike - Solution Oriented FullStack Developer"
        />
        <meta itemProp="image" content="https://bonhomme.lol/meta-og.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ajike - FullStack Developer" />
        <meta
          name="twitter:description"
          content="Emmanuel Ajike - Solution Oriented FullStack Developer"
        />
        <meta name="twitter:site" content="@pixel_arts" />
        <meta name="twitter:creator" content="@pixel_arts" />
        <meta
          name="twitter:image:src"
          content="https://bonhomme.lol/meta-og.png"
        />
        <meta name="og:title" content="Ajike - FullStack Developer" />
        <meta
          name="og:description"
          content="Emmanuel Ajike - Solution Oriented FullStack Developer"
        />
        <meta name="og:image" content="https://bonhomme.lol/meta-og.png" />
        <meta name="og:url" content="https://bonhomme.lol/" />
        <meta name="og:site_name" content="Bonhomme" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
