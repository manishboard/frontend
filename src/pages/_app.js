// import "assets/styles/bakstyle.css";
// import "assets/styles/test.css";
// import 'assets/styles/navbar.css'
import "assets/styles/mails.css";
import "assets/styles/style.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Responsive Dashboard using Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
