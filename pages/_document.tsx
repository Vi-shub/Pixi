import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>PIXAVIA - Design Agency</title>
      <link rel="icon" href="/pixavia-logo-white.png" type="image/x-icon" />
       {/* Font Awesome */}
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
