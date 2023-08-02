import { Html, Head, Main, NextScript } from "next/document";

const FONTURL = "https://fonts.googleapis.com/css2?family=Recursive:wght,CRSV@300,0.5;400,0.5;400,1;700,0.5&family=IBM+Plex+Sans:wght@400;500;600&display=swap";

export default function Document() {
  return (
    <Html data-bs-theme="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link rel="stylesheet" href={FONTURL} />
        <link rel="preload" as="style" href={FONTURL} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
